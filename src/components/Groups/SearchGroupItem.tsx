import React from 'react';
import { GroupName, GroupPhoto } from '../../Styles/Groups';
import ProfilePhoto from '../Profile/ProfilePhoto';
import styled from 'styled-components/macro';
import { JoinGroupParams, JoinGroupStages } from '../../types/GroupTypes';

const SearchGroupItem: React.FC<JoinGroupParams> = ({ group, navigate }) => {
  const nextStage = group.private
    ? JoinGroupStages.passcode
    : JoinGroupStages.join;
  return (
    <Group onClick={() => navigate(nextStage, group)}>
      <GroupPhoto>
        <ProfilePhoto displayName={group.display_name} />
      </GroupPhoto>
      <GroupName>
        <div>{group.display_name}</div>
      </GroupName>
      <GroupDetail>
        <div> {group.members_aggregate.aggregate?.count} Players</div>
        {group.private ? (
          <span role='img' aria-label='private'>
            🔐
          </span>
        ) : (
          <span role='img' aria-label='public'>
            🌎
          </span>
        )}
      </GroupDetail>
    </Group>
  );
};

const Group = styled.div`
  display: grid;
  grid-template-areas: '. name' 'photo name' 'photo details';
  grid-template-columns: 15% 60%;
  grid-template-rows: 8px 25px 12px;
  grid-row-gap: 0;
  margin-bottom: 20px;
  grid-column-gap: 25px;
`;
const GroupDetail = styled.div`
  display: grid;
  grid-area: details;
  font-size: 10px;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-gap: 10px;
`;

export default SearchGroupItem;
