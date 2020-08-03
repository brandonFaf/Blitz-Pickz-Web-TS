import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import useUser from './useUser';
import { useLoadUserLazyQuery } from '../types/graphql.types';
import useGroup from './useGroup';

const useLogin = (): {
  status: string;
  user: firebase.User | null | undefined;
} => {
  const { setUser: setContextUser } = useUser();
  const { setGroup } = useGroup();
  const [user, setUser] = useState<firebase.User | null>();
  const [status, setStatus] = useState('loading');
  const [loadUser, { loading, data, error }] = useLoadUserLazyQuery({
    fetchPolicy: 'no-cache'
  });
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (u: firebase.User | null) => {
        setUser(u);
        if (!u) {
          setStatus('out');
          setContextUser({ id: '', notifications: false });
          setGroup(undefined);
          localStorage.removeItem('token');
          localStorage.removeItem('group');
          return;
        }
        const group = await localStorage.getItem('group');
        if (group) {
          setGroup(JSON.parse(group));
        }
        const t = await u.getIdToken();
        const idTokenResult = await u.getIdTokenResult();
        const hasuraClaim =
          idTokenResult.claims['https://hasura.io/jwt/claims'];
        if (hasuraClaim) {
          console.log('claim exists', t);
          await localStorage.setItem('token', t);
          setStatus('loading');
          loadUser({ variables: { user_id: u.uid } });
        } else {
          console.log('claim did not exist waiting for claim to be there');
          const metadataRef = firebase
            .database()
            .ref('metadata/' + u.uid + '/refreshTime');

          metadataRef.on('value', async d => {
            if (!d.exists) {
              return;
            }
            console.log('now setting the token');
            // Force refresh to pick up the latest custom claims changes.
            const newToken = await u.getIdToken(true);
            await localStorage.setItem('token', newToken);
            setStatus('loading');
            loadUser({ variables: { user_id: u.uid } });
          });
        }
      });
    return unregisterAuthObserver; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadUser]);
  useEffect(() => {
    if (error) {
      console.log('error', error);
    }
    if (data) {
      if (data.user_by_pk) {
        console.log('setContextUser being called', data.user_by_pk);
        setContextUser(data.user_by_pk);
        setStatus('in');
      } else {
        if (!loading) {
          console.log('done loading, no user create them');
          setStatus('creating');
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, loading, error]);
  return { status, user };
};
export default useLogin;
