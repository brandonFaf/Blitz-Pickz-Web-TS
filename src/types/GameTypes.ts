import { Picks, User } from './graphql.types';

export type PickModel = Pick<
  Picks,
  'id' | 'selected_id' | 'group_id' | 'correct'
> & {
  user: Pick<User, 'id' | 'display_name'>;
};
