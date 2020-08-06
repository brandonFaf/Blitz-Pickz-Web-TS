import React from 'react';

import {
  WhoPickedContainer,
  PickGroup,
  Divider
} from '../../Styles/Game/WhoPicked';
import { animated, useTransition } from 'react-spring';
import { Picks, User } from '../../types/graphql.types';

type props = {
  picks: Array<
    Pick<Picks, 'selected_id'> & { user: Pick<User, 'id' | 'display_name'> }
  >;
  homeId: number;
  visId: number;
  showWhoPicked: boolean;
};
const WhoPicked: React.FC<props> = ({
  picks,
  homeId,
  visId,
  showWhoPicked
}) => {
  const pickedVisTm = picks.filter(p => p.selected_id === visId);
  const pickedHomeTm = picks.filter(p => p.selected_id === homeId);

  const transitions = useTransition(showWhoPicked, null, {
    from: { opacity: 0, height: '0vh' },
    enter: { opacity: 1, height: '15vh' },
    leave: { opacity: 0, height: '0vh' }
  });
  const meat = (
    <WhoPickedContainer>
      <PickGroup>
        {pickedVisTm.map(({ user: { id, display_name } }) => (
          <div key={id}>{display_name}</div>
        ))}
      </PickGroup>
      <Divider />
      <PickGroup>
        {pickedHomeTm.map(({ user: { id, display_name } }) => (
          <div key={id}>{display_name}</div>
        ))}
      </PickGroup>
    </WhoPickedContainer>
  );
  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              {meat}
            </animated.div>
          )
      )}
    </>
  );
};

export default WhoPicked;
