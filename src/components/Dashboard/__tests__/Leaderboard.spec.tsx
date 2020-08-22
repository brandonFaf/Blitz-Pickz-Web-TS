import React from 'react';
import { RenderApollo } from '../../../testUtils/renderers';
import Leaderboard from '../Leaderboard';
import { LeaderboardDocument } from '../../../types/graphql.types';
import { Leaderboard1, Leaderboard3 } from '../../../testUtils/leaderboard';
import userData from '../../../testUtils/userData';
import { render, cleanup } from '@testing-library/react';
import wait from '../../../testUtils/wait';

afterEach(cleanup);
const renderLeaderboard = (mock, group, user) => {
  const props = { mock, group, user };
  return render(
    <RenderApollo {...props}>
      <Leaderboard />
    </RenderApollo>
  );
};
describe('<Leaderboard/>', () => {
  it('renders correctly for one person in the list', async () => {
    //setup
    const group = { id: 1 };
    const user = { id: '1' };
    const mock = [
      {
        request: {
          query: LeaderboardDocument,
          variables: {
            group_id: group.id
          }
        },
        result: { data: Leaderboard1 }
      }
    ];
    const { asFragment } = renderLeaderboard(mock, group, user);
    await wait();
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders correctly for many people in the list', async () => {
    const group = { id: 1 };
    const user = { id: '1' };
    const mock = [
      {
        request: {
          query: LeaderboardDocument,
          variables: {
            group_id: group.id
          }
        },
        result: { data: Leaderboard3 }
      }
    ];
    const { asFragment } = renderLeaderboard(mock, group, user);
    await wait();
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders group members if data rankings is empty', async () => {
    const group = {
      id: 2,
      members: [{ user: userData[1] }, { user: userData[0] }]
    };
    const user = { id: '1' };
    const mock = [
      {
        request: {
          query: LeaderboardDocument,
          variables: {
            group_id: group.id
          }
        },
        result: { data: { ...Leaderboard1, rankings: [] } }
      }
    ];
    const { asFragment } = renderLeaderboard(mock, group, user);
    await wait();
    expect(asFragment()).toMatchSnapshot();
  });
});
