import React, { useState, useEffect, SyntheticEvent } from 'react';
import styled from 'styled-components/macro';
import Input from '../Shared/FloatingInput';
import { useFetchAvailableGroupsQuery } from '../../types/graphql.types';
import useUser from '../../hooks/useUser';
import { SearchGroupModel, JoinGroupStages } from '../../types/GroupTypes';
import SearchGroupItem from './SearchGroupItem';
import { GroupFormError } from '../../Styles/Groups';

const SearchGroup = ({
  navigate
}: {
  navigate: (nextStage: JoinGroupStages, g: SearchGroupModel | null) => void;
}) => {
  const { user } = useUser();
  const [groups, setGroups] = useState<SearchGroupModel[]>([]);
  const { data, loading, error } = useFetchAvailableGroupsQuery({
    variables: { user_id: user.id }
  });
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (data && data.get_available_groups) {
      if (search) {
        const expression = new RegExp(search, 'i');
        setGroups(
          data.get_available_groups.filter(g => expression.test(g.display_name))
        );
      } else {
        setGroups(data.get_available_groups);
      }
    }
  }, [data, setGroups, search]);
  const handleChange = (event: SyntheticEvent) => {
    setSearch((event.target as HTMLInputElement).value);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return <GroupFormError>There was an error fetching leagues</GroupFormError>;
  }
  return (
    <Container>
      <Input
        label='Search'
        name='searchterm'
        onChange={handleChange}
        value={search}
      />
      <GroupContainer>
        {groups.map(g => (
          <SearchGroupItem navigate={navigate} group={g} key={g.id} />
        ))}
      </GroupContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 70vw;
  padding-top: 75px;
  height: 100%;
  @media (min-width: 620px) {
    width: 50%;
    height: 50%;
    padding-top: 60px;
  }
`;
const GroupContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;
export default SearchGroup;
