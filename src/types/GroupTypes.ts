import {
  Group,
  User,
  Group_User_Aggregate_Fields,
  Maybe
} from './graphql.types';
export type MemberModel = Pick<User, 'photo_url' | 'id' | 'display_name'>;
export type GroupModel = Pick<Group, 'display_name' | 'id' | 'admin_id'> & {
  members: Array<{ user: MemberModel }>;
};
export type SearchGroupModel = Pick<
  Group,
  'id' | 'admin_id' | 'display_name' | 'private' | 'passcode'
> & {
  members_aggregate: {
    aggregate?: Maybe<Pick<Group_User_Aggregate_Fields, 'count'>>;
  };
};
export enum JoinGroupStages {
  search,
  passcode,
  join
}
export type JoinGroupParams = {
  group: SearchGroupModel;
  navigate: (nextStage: JoinGroupStages, g: SearchGroupModel | null) => void;
};
