import {User} from './graphql.types';

export type UserModel = Pick<
  User,
  'notifications' | 'phone_number' | 'photo_url' | 'display_name' | 'id'
>;
