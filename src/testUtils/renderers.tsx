//@ts-nocheck
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { UserContext } from '../contexts/UserContext';
import { GroupContext } from '../contexts/GroupContext';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
export const RenderApollo = ({
  children,
  mock = [],
  group = {},
  user = {}
}) => {
  const history = createMemoryHistory();
  return (
    <MockedProvider mocks={mock} addTypename={false}>
      <UserContext.Provider value={{ user }}>
        <GroupContext.Provider value={{ group }}>
          <Router history={history}>{children}</Router>
        </GroupContext.Provider>
      </UserContext.Provider>
    </MockedProvider>
  );
};
