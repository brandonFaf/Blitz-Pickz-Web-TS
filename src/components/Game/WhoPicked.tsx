import React from 'react';

import {
  WhoPickedContainer,
  PickGroup,
  Divider,
} from '../../Styles/Game/WhoPicked';
import { Picks, User } from '../../types/graphql.types';

type props = {
  picks: Array<
    Pick<Picks, 'selected_id'> & { user: Pick<User, 'id' | 'display_name'> }
  >;
  homeId: number;
  visId: number;
};
const WhoPicked: React.FC<props> = ({ picks, homeId, visId }) => {
  const pickedVisTm = picks.filter(p => p.selected_id === visId);
  const pickedHomeTm = picks.filter(p => p.selected_id === homeId);
  return (
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
};

export default WhoPicked;
