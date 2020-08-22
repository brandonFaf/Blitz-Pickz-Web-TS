import React from 'react';
import { RenderApollo } from '../../../testUtils/renderers';
import Dashboard from '../index';
import { DashbaordDocument } from '../../../types/graphql.types';
import { Dashboard1 } from '../../../testUtils/dashboard';
import { render, cleanup } from '@testing-library/react';
import wait from '../../../testUtils/wait';
afterEach(cleanup);
jest.mock('../MakePicks.tsx');
jest.mock('../Leaderboard.tsx');
const renderLeaderboard = (mock, group, user) => {
  const props = { mock, group, user };
  return render(
    <RenderApollo {...props}>
      <Dashboard />
    </RenderApollo>
  );
};
describe('<Dashboard/>', () => {
  it('should render', async () => {
    const group = { id: 1 };
    const user = { id: '1' };
    const mock = [
      {
        request: {
          query: DashbaordDocument,
          variables: {
            group_id: group.id,
            user_id: user.id
          }
        },
        result: { data: Dashboard1 }
      }
    ];
    const { asFragment } = renderLeaderboard(mock, group, user);
    await wait();
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render NoGroupMessage when there is no group', async () => {
    const group = null;
    const { getByText } = renderLeaderboard(undefined, group, undefined);
    await wait();
    expect(
      getByText("You're ready to play, but you need to join a league first.")
    );
  });
});
