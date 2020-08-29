import { User, Score_Sum_Fields } from './graphql.types';

export type UserModel = Pick<User, 'photo_url' | 'display_name' | 'id'>;
export type Member = {
  user: Pick<User, 'display_name' | 'id' | 'photo_url'> & {
    scores_aggregate: {
      aggregate?:
        | {
            sum?: Pick<Score_Sum_Fields, 'points'> | null | undefined;
          }
        | null
        | undefined;
    };
  };
};
