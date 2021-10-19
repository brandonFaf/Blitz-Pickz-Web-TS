import gql from 'graphql-tag';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends {[key: string]: any}> = {[K in keyof T]: T[K]};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  timestamptz: any;
  timetz: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "game" */
export type Game = {
  date: Scalars['date'];
  home_id: Scalars['Int'];
  home_score?: Maybe<Scalars['Int']>;
  /** An object relationship */
  home_team: Team;
  id: Scalars['Int'];
  /** An array relationship */
  picks: Array<Picks>;
  /** An aggregate relationship */
  picks_aggregate: Picks_Aggregate;
  quarter?: Maybe<Scalars['Int']>;
  time: Scalars['timetz'];
  time_remaning?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  vis_id: Scalars['Int'];
  vis_score?: Maybe<Scalars['Int']>;
  /** An object relationship */
  vis_team: Team;
  week: Scalars['Int'];
  winner_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  winning_team?: Maybe<Team>;
};

/** columns and relationships of "game" */
export type GamePicksArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

/** columns and relationships of "game" */
export type GamePicks_AggregateArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

/** aggregated selection of "game" */
export type Game_Aggregate = {
  aggregate?: Maybe<Game_Aggregate_Fields>;
  nodes: Array<Game>;
};

/** aggregate fields of "game" */
export type Game_Aggregate_Fields = {
  avg?: Maybe<Game_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Game_Max_Fields>;
  min?: Maybe<Game_Min_Fields>;
  stddev?: Maybe<Game_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Sum_Fields>;
  var_pop?: Maybe<Game_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Var_Samp_Fields>;
  variance?: Maybe<Game_Variance_Fields>;
};

/** aggregate fields of "game" */
export type Game_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Game_Avg_Fields = {
  home_id?: Maybe<Scalars['Float']>;
  home_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  vis_id?: Maybe<Scalars['Float']>;
  vis_score?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "game". All fields are combined with a logical 'AND'. */
export type Game_Bool_Exp = {
  _and?: Maybe<Array<Game_Bool_Exp>>;
  _not?: Maybe<Game_Bool_Exp>;
  _or?: Maybe<Array<Game_Bool_Exp>>;
  date?: Maybe<Date_Comparison_Exp>;
  home_id?: Maybe<Int_Comparison_Exp>;
  home_score?: Maybe<Int_Comparison_Exp>;
  home_team?: Maybe<Team_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  picks?: Maybe<Picks_Bool_Exp>;
  quarter?: Maybe<Int_Comparison_Exp>;
  time?: Maybe<Timetz_Comparison_Exp>;
  time_remaning?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  vis_id?: Maybe<Int_Comparison_Exp>;
  vis_score?: Maybe<Int_Comparison_Exp>;
  vis_team?: Maybe<Team_Bool_Exp>;
  week?: Maybe<Int_Comparison_Exp>;
  winner_id?: Maybe<Int_Comparison_Exp>;
  winning_team?: Maybe<Team_Bool_Exp>;
};

/** unique or primary key constraints on table "game" */
export enum Game_Constraint {
  /** unique or primary key constraint */
  GamePkey = 'game_pkey',
}

/** input type for incrementing numeric columns in table "game" */
export type Game_Inc_Input = {
  home_id?: Maybe<Scalars['Int']>;
  home_score?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quarter?: Maybe<Scalars['Int']>;
  vis_id?: Maybe<Scalars['Int']>;
  vis_score?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  winner_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "game" */
export type Game_Insert_Input = {
  date?: Maybe<Scalars['date']>;
  home_id?: Maybe<Scalars['Int']>;
  home_score?: Maybe<Scalars['Int']>;
  home_team?: Maybe<Team_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  picks?: Maybe<Picks_Arr_Rel_Insert_Input>;
  quarter?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['timetz']>;
  time_remaning?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vis_id?: Maybe<Scalars['Int']>;
  vis_score?: Maybe<Scalars['Int']>;
  vis_team?: Maybe<Team_Obj_Rel_Insert_Input>;
  week?: Maybe<Scalars['Int']>;
  winner_id?: Maybe<Scalars['Int']>;
  winning_team?: Maybe<Team_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Game_Max_Fields = {
  date?: Maybe<Scalars['date']>;
  home_id?: Maybe<Scalars['Int']>;
  home_score?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quarter?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['timetz']>;
  time_remaning?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vis_id?: Maybe<Scalars['Int']>;
  vis_score?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  winner_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Game_Min_Fields = {
  date?: Maybe<Scalars['date']>;
  home_id?: Maybe<Scalars['Int']>;
  home_score?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quarter?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['timetz']>;
  time_remaning?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vis_id?: Maybe<Scalars['Int']>;
  vis_score?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  winner_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "game" */
export type Game_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Game>;
};

/** input type for inserting object relation for remote table "game" */
export type Game_Obj_Rel_Insert_Input = {
  data: Game_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Game_On_Conflict>;
};

/** on conflict condition type for table "game" */
export type Game_On_Conflict = {
  constraint: Game_Constraint;
  update_columns: Array<Game_Update_Column>;
  where?: Maybe<Game_Bool_Exp>;
};

/** Ordering options when selecting data from "game". */
export type Game_Order_By = {
  date?: Maybe<Order_By>;
  home_id?: Maybe<Order_By>;
  home_score?: Maybe<Order_By>;
  home_team?: Maybe<Team_Order_By>;
  id?: Maybe<Order_By>;
  picks_aggregate?: Maybe<Picks_Aggregate_Order_By>;
  quarter?: Maybe<Order_By>;
  time?: Maybe<Order_By>;
  time_remaning?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  vis_id?: Maybe<Order_By>;
  vis_score?: Maybe<Order_By>;
  vis_team?: Maybe<Team_Order_By>;
  week?: Maybe<Order_By>;
  winner_id?: Maybe<Order_By>;
  winning_team?: Maybe<Team_Order_By>;
};

/** primary key columns input for table: game */
export type Game_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "game" */
export enum Game_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  HomeId = 'home_id',
  /** column name */
  HomeScore = 'home_score',
  /** column name */
  Id = 'id',
  /** column name */
  Quarter = 'quarter',
  /** column name */
  Time = 'time',
  /** column name */
  TimeRemaning = 'time_remaning',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VisId = 'vis_id',
  /** column name */
  VisScore = 'vis_score',
  /** column name */
  Week = 'week',
  /** column name */
  WinnerId = 'winner_id',
}

/** input type for updating data in table "game" */
export type Game_Set_Input = {
  date?: Maybe<Scalars['date']>;
  home_id?: Maybe<Scalars['Int']>;
  home_score?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quarter?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['timetz']>;
  time_remaning?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  vis_id?: Maybe<Scalars['Int']>;
  vis_score?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  winner_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Game_Stddev_Fields = {
  home_id?: Maybe<Scalars['Float']>;
  home_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  vis_id?: Maybe<Scalars['Float']>;
  vis_score?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Game_Stddev_Pop_Fields = {
  home_id?: Maybe<Scalars['Float']>;
  home_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  vis_id?: Maybe<Scalars['Float']>;
  vis_score?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Game_Stddev_Samp_Fields = {
  home_id?: Maybe<Scalars['Float']>;
  home_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  vis_id?: Maybe<Scalars['Float']>;
  vis_score?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Game_Sum_Fields = {
  home_id?: Maybe<Scalars['Int']>;
  home_score?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  quarter?: Maybe<Scalars['Int']>;
  vis_id?: Maybe<Scalars['Int']>;
  vis_score?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  winner_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "game" */
export enum Game_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  HomeId = 'home_id',
  /** column name */
  HomeScore = 'home_score',
  /** column name */
  Id = 'id',
  /** column name */
  Quarter = 'quarter',
  /** column name */
  Time = 'time',
  /** column name */
  TimeRemaning = 'time_remaning',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VisId = 'vis_id',
  /** column name */
  VisScore = 'vis_score',
  /** column name */
  Week = 'week',
  /** column name */
  WinnerId = 'winner_id',
}

/** aggregate var_pop on columns */
export type Game_Var_Pop_Fields = {
  home_id?: Maybe<Scalars['Float']>;
  home_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  vis_id?: Maybe<Scalars['Float']>;
  vis_score?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Game_Var_Samp_Fields = {
  home_id?: Maybe<Scalars['Float']>;
  home_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  vis_id?: Maybe<Scalars['Float']>;
  vis_score?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Game_Variance_Fields = {
  home_id?: Maybe<Scalars['Float']>;
  home_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  quarter?: Maybe<Scalars['Float']>;
  vis_id?: Maybe<Scalars['Float']>;
  vis_score?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
  winner_id?: Maybe<Scalars['Float']>;
};

export type Get_Available_Groups_Args = {
  user_id?: Maybe<Scalars['String']>;
};

/** columns and relationships of "group" */
export type Group = {
  admin_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  display_name: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  members: Array<Group_User>;
  /** An aggregate relationship */
  members_aggregate: Group_User_Aggregate;
  passcode?: Maybe<Scalars['String']>;
  /** An array relationship */
  picks: Array<Picks>;
  /** An aggregate relationship */
  picks_aggregate: Picks_Aggregate;
  private: Scalars['Boolean'];
  /** fetch data from the table: "rankings" */
  rankings: Array<Rankings>;
  /** An aggregate relationship */
  rankings_aggregate: Rankings_Aggregate;
  /** An array relationship */
  scores: Array<Score>;
  /** An aggregate relationship */
  scores_aggregate: Score_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
};

/** columns and relationships of "group" */
export type GroupMembersArgs = {
  distinct_on?: Maybe<Array<Group_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_User_Order_By>>;
  where?: Maybe<Group_User_Bool_Exp>;
};

/** columns and relationships of "group" */
export type GroupMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_User_Order_By>>;
  where?: Maybe<Group_User_Bool_Exp>;
};

/** columns and relationships of "group" */
export type GroupPicksArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

/** columns and relationships of "group" */
export type GroupPicks_AggregateArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

/** columns and relationships of "group" */
export type GroupRankingsArgs = {
  distinct_on?: Maybe<Array<Rankings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rankings_Order_By>>;
  where?: Maybe<Rankings_Bool_Exp>;
};

/** columns and relationships of "group" */
export type GroupRankings_AggregateArgs = {
  distinct_on?: Maybe<Array<Rankings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rankings_Order_By>>;
  where?: Maybe<Rankings_Bool_Exp>;
};

/** columns and relationships of "group" */
export type GroupScoresArgs = {
  distinct_on?: Maybe<Array<Score_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Score_Order_By>>;
  where?: Maybe<Score_Bool_Exp>;
};

/** columns and relationships of "group" */
export type GroupScores_AggregateArgs = {
  distinct_on?: Maybe<Array<Score_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Score_Order_By>>;
  where?: Maybe<Score_Bool_Exp>;
};

/** aggregated selection of "group" */
export type Group_Aggregate = {
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_Fields = {
  avg?: Maybe<Group_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
  stddev?: Maybe<Group_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Sum_Fields>;
  var_pop?: Maybe<Group_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Var_Samp_Fields>;
  variance?: Maybe<Group_Variance_Fields>;
};

/** aggregate fields of "group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Group_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  _and?: Maybe<Array<Group_Bool_Exp>>;
  _not?: Maybe<Group_Bool_Exp>;
  _or?: Maybe<Array<Group_Bool_Exp>>;
  admin_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  members?: Maybe<Group_User_Bool_Exp>;
  passcode?: Maybe<String_Comparison_Exp>;
  picks?: Maybe<Picks_Bool_Exp>;
  private?: Maybe<Boolean_Comparison_Exp>;
  rankings?: Maybe<Rankings_Bool_Exp>;
  scores?: Maybe<Score_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "group" */
export enum Group_Constraint {
  /** unique or primary key constraint */
  GroupDisplayNameKey = 'group_display_name_key',
  /** unique or primary key constraint */
  GroupPkey = 'group_pkey',
}

/** input type for incrementing numeric columns in table "group" */
export type Group_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "group" */
export type Group_Insert_Input = {
  admin_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  members?: Maybe<Group_User_Arr_Rel_Insert_Input>;
  passcode?: Maybe<Scalars['String']>;
  picks?: Maybe<Picks_Arr_Rel_Insert_Input>;
  private?: Maybe<Scalars['Boolean']>;
  rankings?: Maybe<Rankings_Arr_Rel_Insert_Input>;
  scores?: Maybe<Score_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  admin_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  passcode?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  admin_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  passcode?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "group" */
export type Group_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group>;
};

/** input type for inserting object relation for remote table "group" */
export type Group_Obj_Rel_Insert_Input = {
  data: Group_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Group_On_Conflict>;
};

/** on conflict condition type for table "group" */
export type Group_On_Conflict = {
  constraint: Group_Constraint;
  update_columns: Array<Group_Update_Column>;
  where?: Maybe<Group_Bool_Exp>;
};

/** Ordering options when selecting data from "group". */
export type Group_Order_By = {
  admin_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  members_aggregate?: Maybe<Group_User_Aggregate_Order_By>;
  passcode?: Maybe<Order_By>;
  picks_aggregate?: Maybe<Picks_Aggregate_Order_By>;
  private?: Maybe<Order_By>;
  rankings_aggregate?: Maybe<Rankings_Aggregate_Order_By>;
  scores_aggregate?: Maybe<Score_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** primary key columns input for table: group */
export type Group_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "group" */
export enum Group_Select_Column {
  /** column name */
  AdminId = 'admin_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Passcode = 'passcode',
  /** column name */
  Private = 'private',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "group" */
export type Group_Set_Input = {
  admin_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  passcode?: Maybe<Scalars['String']>;
  private?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Group_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Group_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Group_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Group_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "group" */
export enum Group_Update_Column {
  /** column name */
  AdminId = 'admin_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  Passcode = 'passcode',
  /** column name */
  Private = 'private',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "group_user" */
export type Group_User = {
  /** An object relationship */
  group: Group;
  group_id: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
};

/** aggregated selection of "group_user" */
export type Group_User_Aggregate = {
  aggregate?: Maybe<Group_User_Aggregate_Fields>;
  nodes: Array<Group_User>;
};

/** aggregate fields of "group_user" */
export type Group_User_Aggregate_Fields = {
  avg?: Maybe<Group_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Group_User_Max_Fields>;
  min?: Maybe<Group_User_Min_Fields>;
  stddev?: Maybe<Group_User_Stddev_Fields>;
  stddev_pop?: Maybe<Group_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_User_Stddev_Samp_Fields>;
  sum?: Maybe<Group_User_Sum_Fields>;
  var_pop?: Maybe<Group_User_Var_Pop_Fields>;
  var_samp?: Maybe<Group_User_Var_Samp_Fields>;
  variance?: Maybe<Group_User_Variance_Fields>;
};

/** aggregate fields of "group_user" */
export type Group_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "group_user" */
export type Group_User_Aggregate_Order_By = {
  avg?: Maybe<Group_User_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Group_User_Max_Order_By>;
  min?: Maybe<Group_User_Min_Order_By>;
  stddev?: Maybe<Group_User_Stddev_Order_By>;
  stddev_pop?: Maybe<Group_User_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Group_User_Stddev_Samp_Order_By>;
  sum?: Maybe<Group_User_Sum_Order_By>;
  var_pop?: Maybe<Group_User_Var_Pop_Order_By>;
  var_samp?: Maybe<Group_User_Var_Samp_Order_By>;
  variance?: Maybe<Group_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "group_user" */
export type Group_User_Arr_Rel_Insert_Input = {
  data: Array<Group_User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Group_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Group_User_Avg_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "group_user" */
export type Group_User_Avg_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group_user". All fields are combined with a logical 'AND'. */
export type Group_User_Bool_Exp = {
  _and?: Maybe<Array<Group_User_Bool_Exp>>;
  _not?: Maybe<Group_User_Bool_Exp>;
  _or?: Maybe<Array<Group_User_Bool_Exp>>;
  group?: Maybe<Group_Bool_Exp>;
  group_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_user" */
export enum Group_User_Constraint {
  /** unique or primary key constraint */
  GroupUserPkey = 'group_user_pkey',
}

/** input type for incrementing numeric columns in table "group_user" */
export type Group_User_Inc_Input = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "group_user" */
export type Group_User_Insert_Input = {
  group?: Maybe<Group_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Group_User_Max_Fields = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "group_user" */
export type Group_User_Max_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Group_User_Min_Fields = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "group_user" */
export type Group_User_Min_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "group_user" */
export type Group_User_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_User>;
};

/** on conflict condition type for table "group_user" */
export type Group_User_On_Conflict = {
  constraint: Group_User_Constraint;
  update_columns: Array<Group_User_Update_Column>;
  where?: Maybe<Group_User_Bool_Exp>;
};

/** Ordering options when selecting data from "group_user". */
export type Group_User_Order_By = {
  group?: Maybe<Group_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: group_user */
export type Group_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "group_user" */
export enum Group_User_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "group_user" */
export type Group_User_Set_Input = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Group_User_Stddev_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "group_user" */
export type Group_User_Stddev_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_User_Stddev_Pop_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "group_user" */
export type Group_User_Stddev_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_User_Stddev_Samp_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "group_user" */
export type Group_User_Stddev_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Group_User_Sum_Fields = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "group_user" */
export type Group_User_Sum_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "group_user" */
export enum Group_User_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Group_User_Var_Pop_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "group_user" */
export type Group_User_Var_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_User_Var_Samp_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "group_user" */
export type Group_User_Var_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_User_Variance_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "group_user" */
export type Group_User_Variance_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Group_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Group_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Group_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "game" */
  delete_game?: Maybe<Game_Mutation_Response>;
  /** delete single row from the table: "game" */
  delete_game_by_pk?: Maybe<Game>;
  /** delete data from the table: "group" */
  delete_group?: Maybe<Group_Mutation_Response>;
  /** delete single row from the table: "group" */
  delete_group_by_pk?: Maybe<Group>;
  /** delete data from the table: "group_user" */
  delete_group_user?: Maybe<Group_User_Mutation_Response>;
  /** delete single row from the table: "group_user" */
  delete_group_user_by_pk?: Maybe<Group_User>;
  /** delete data from the table: "notification_token" */
  delete_notification_token?: Maybe<Notification_Token_Mutation_Response>;
  /** delete single row from the table: "notification_token" */
  delete_notification_token_by_pk?: Maybe<Notification_Token>;
  /** delete data from the table: "picks" */
  delete_picks?: Maybe<Picks_Mutation_Response>;
  /** delete single row from the table: "picks" */
  delete_picks_by_pk?: Maybe<Picks>;
  /** delete data from the table: "score" */
  delete_score?: Maybe<Score_Mutation_Response>;
  /** delete single row from the table: "score" */
  delete_score_by_pk?: Maybe<Score>;
  /** delete data from the table: "team" */
  delete_team?: Maybe<Team_Mutation_Response>;
  /** delete single row from the table: "team" */
  delete_team_by_pk?: Maybe<Team>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "game" */
  insert_game?: Maybe<Game_Mutation_Response>;
  /** insert a single row into the table: "game" */
  insert_game_one?: Maybe<Game>;
  /** insert data into the table: "group" */
  insert_group?: Maybe<Group_Mutation_Response>;
  /** insert a single row into the table: "group" */
  insert_group_one?: Maybe<Group>;
  /** insert data into the table: "group_user" */
  insert_group_user?: Maybe<Group_User_Mutation_Response>;
  /** insert a single row into the table: "group_user" */
  insert_group_user_one?: Maybe<Group_User>;
  /** insert data into the table: "notification_token" */
  insert_notification_token?: Maybe<Notification_Token_Mutation_Response>;
  /** insert a single row into the table: "notification_token" */
  insert_notification_token_one?: Maybe<Notification_Token>;
  /** insert data into the table: "picks" */
  insert_picks?: Maybe<Picks_Mutation_Response>;
  /** insert a single row into the table: "picks" */
  insert_picks_one?: Maybe<Picks>;
  /** insert data into the table: "score" */
  insert_score?: Maybe<Score_Mutation_Response>;
  /** insert a single row into the table: "score" */
  insert_score_one?: Maybe<Score>;
  /** insert data into the table: "team" */
  insert_team?: Maybe<Team_Mutation_Response>;
  /** insert a single row into the table: "team" */
  insert_team_one?: Maybe<Team>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "game" */
  update_game?: Maybe<Game_Mutation_Response>;
  /** update single row of the table: "game" */
  update_game_by_pk?: Maybe<Game>;
  /** update data of the table: "group" */
  update_group?: Maybe<Group_Mutation_Response>;
  /** update single row of the table: "group" */
  update_group_by_pk?: Maybe<Group>;
  /** update data of the table: "group_user" */
  update_group_user?: Maybe<Group_User_Mutation_Response>;
  /** update single row of the table: "group_user" */
  update_group_user_by_pk?: Maybe<Group_User>;
  /** update data of the table: "notification_token" */
  update_notification_token?: Maybe<Notification_Token_Mutation_Response>;
  /** update single row of the table: "notification_token" */
  update_notification_token_by_pk?: Maybe<Notification_Token>;
  /** update data of the table: "picks" */
  update_picks?: Maybe<Picks_Mutation_Response>;
  /** update single row of the table: "picks" */
  update_picks_by_pk?: Maybe<Picks>;
  /** update data of the table: "score" */
  update_score?: Maybe<Score_Mutation_Response>;
  /** update single row of the table: "score" */
  update_score_by_pk?: Maybe<Score>;
  /** update data of the table: "team" */
  update_team?: Maybe<Team_Mutation_Response>;
  /** update single row of the table: "team" */
  update_team_by_pk?: Maybe<Team>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};

/** mutation root */
export type Mutation_RootDelete_GameArgs = {
  where: Game_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Game_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Group_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Group_UserArgs = {
  where: Group_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Group_User_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Notification_TokenArgs = {
  where: Notification_Token_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Notification_Token_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_PicksArgs = {
  where: Picks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Picks_By_PkArgs = {
  game_id: Scalars['Int'];
  group_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_ScoreArgs = {
  where: Score_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Score_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Team_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};

/** mutation root */
export type Mutation_RootInsert_GameArgs = {
  objects: Array<Game_Insert_Input>;
  on_conflict?: Maybe<Game_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_OneArgs = {
  object: Game_Insert_Input;
  on_conflict?: Maybe<Game_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
  objects: Array<Group_Insert_Input>;
  on_conflict?: Maybe<Group_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: Maybe<Group_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Group_UserArgs = {
  objects: Array<Group_User_Insert_Input>;
  on_conflict?: Maybe<Group_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Group_User_OneArgs = {
  object: Group_User_Insert_Input;
  on_conflict?: Maybe<Group_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Notification_TokenArgs = {
  objects: Array<Notification_Token_Insert_Input>;
  on_conflict?: Maybe<Notification_Token_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Notification_Token_OneArgs = {
  object: Notification_Token_Insert_Input;
  on_conflict?: Maybe<Notification_Token_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PicksArgs = {
  objects: Array<Picks_Insert_Input>;
  on_conflict?: Maybe<Picks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Picks_OneArgs = {
  object: Picks_Insert_Input;
  on_conflict?: Maybe<Picks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ScoreArgs = {
  objects: Array<Score_Insert_Input>;
  on_conflict?: Maybe<Score_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Score_OneArgs = {
  object: Score_Insert_Input;
  on_conflict?: Maybe<Score_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: Maybe<Team_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Team_OneArgs = {
  object: Team_Insert_Input;
  on_conflict?: Maybe<Team_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_GameArgs = {
  _inc?: Maybe<Game_Inc_Input>;
  _set?: Maybe<Game_Set_Input>;
  where: Game_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Game_By_PkArgs = {
  _inc?: Maybe<Game_Inc_Input>;
  _set?: Maybe<Game_Set_Input>;
  pk_columns: Game_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_GroupArgs = {
  _inc?: Maybe<Group_Inc_Input>;
  _set?: Maybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
  _inc?: Maybe<Group_Inc_Input>;
  _set?: Maybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Group_UserArgs = {
  _inc?: Maybe<Group_User_Inc_Input>;
  _set?: Maybe<Group_User_Set_Input>;
  where: Group_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Group_User_By_PkArgs = {
  _inc?: Maybe<Group_User_Inc_Input>;
  _set?: Maybe<Group_User_Set_Input>;
  pk_columns: Group_User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Notification_TokenArgs = {
  _inc?: Maybe<Notification_Token_Inc_Input>;
  _set?: Maybe<Notification_Token_Set_Input>;
  where: Notification_Token_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Notification_Token_By_PkArgs = {
  _inc?: Maybe<Notification_Token_Inc_Input>;
  _set?: Maybe<Notification_Token_Set_Input>;
  pk_columns: Notification_Token_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PicksArgs = {
  _inc?: Maybe<Picks_Inc_Input>;
  _set?: Maybe<Picks_Set_Input>;
  where: Picks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Picks_By_PkArgs = {
  _inc?: Maybe<Picks_Inc_Input>;
  _set?: Maybe<Picks_Set_Input>;
  pk_columns: Picks_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ScoreArgs = {
  _inc?: Maybe<Score_Inc_Input>;
  _set?: Maybe<Score_Set_Input>;
  where: Score_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Score_By_PkArgs = {
  _inc?: Maybe<Score_Inc_Input>;
  _set?: Maybe<Score_Set_Input>;
  pk_columns: Score_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_TeamArgs = {
  _inc?: Maybe<Team_Inc_Input>;
  _set?: Maybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Team_By_PkArgs = {
  _inc?: Maybe<Team_Inc_Input>;
  _set?: Maybe<Team_Set_Input>;
  pk_columns: Team_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** columns and relationships of "notification_token" */
export type Notification_Token = {
  id: Scalars['Int'];
  token: Scalars['String'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
};

/** aggregated selection of "notification_token" */
export type Notification_Token_Aggregate = {
  aggregate?: Maybe<Notification_Token_Aggregate_Fields>;
  nodes: Array<Notification_Token>;
};

/** aggregate fields of "notification_token" */
export type Notification_Token_Aggregate_Fields = {
  avg?: Maybe<Notification_Token_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Notification_Token_Max_Fields>;
  min?: Maybe<Notification_Token_Min_Fields>;
  stddev?: Maybe<Notification_Token_Stddev_Fields>;
  stddev_pop?: Maybe<Notification_Token_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Notification_Token_Stddev_Samp_Fields>;
  sum?: Maybe<Notification_Token_Sum_Fields>;
  var_pop?: Maybe<Notification_Token_Var_Pop_Fields>;
  var_samp?: Maybe<Notification_Token_Var_Samp_Fields>;
  variance?: Maybe<Notification_Token_Variance_Fields>;
};

/** aggregate fields of "notification_token" */
export type Notification_Token_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Notification_Token_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notification_token" */
export type Notification_Token_Aggregate_Order_By = {
  avg?: Maybe<Notification_Token_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Notification_Token_Max_Order_By>;
  min?: Maybe<Notification_Token_Min_Order_By>;
  stddev?: Maybe<Notification_Token_Stddev_Order_By>;
  stddev_pop?: Maybe<Notification_Token_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Notification_Token_Stddev_Samp_Order_By>;
  sum?: Maybe<Notification_Token_Sum_Order_By>;
  var_pop?: Maybe<Notification_Token_Var_Pop_Order_By>;
  var_samp?: Maybe<Notification_Token_Var_Samp_Order_By>;
  variance?: Maybe<Notification_Token_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "notification_token" */
export type Notification_Token_Arr_Rel_Insert_Input = {
  data: Array<Notification_Token_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Notification_Token_On_Conflict>;
};

/** aggregate avg on columns */
export type Notification_Token_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "notification_token" */
export type Notification_Token_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "notification_token". All fields are combined with a logical 'AND'. */
export type Notification_Token_Bool_Exp = {
  _and?: Maybe<Array<Notification_Token_Bool_Exp>>;
  _not?: Maybe<Notification_Token_Bool_Exp>;
  _or?: Maybe<Array<Notification_Token_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "notification_token" */
export enum Notification_Token_Constraint {
  /** unique or primary key constraint */
  NotificationTokenPkey = 'notification_token_pkey',
  /** unique or primary key constraint */
  NotificationTokenTokenKey = 'notification_token_token_key',
}

/** input type for incrementing numeric columns in table "notification_token" */
export type Notification_Token_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "notification_token" */
export type Notification_Token_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Notification_Token_Max_Fields = {
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "notification_token" */
export type Notification_Token_Max_Order_By = {
  id?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Notification_Token_Min_Fields = {
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "notification_token" */
export type Notification_Token_Min_Order_By = {
  id?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "notification_token" */
export type Notification_Token_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Notification_Token>;
};

/** on conflict condition type for table "notification_token" */
export type Notification_Token_On_Conflict = {
  constraint: Notification_Token_Constraint;
  update_columns: Array<Notification_Token_Update_Column>;
  where?: Maybe<Notification_Token_Bool_Exp>;
};

/** Ordering options when selecting data from "notification_token". */
export type Notification_Token_Order_By = {
  id?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: notification_token */
export type Notification_Token_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "notification_token" */
export enum Notification_Token_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "notification_token" */
export type Notification_Token_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Notification_Token_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "notification_token" */
export type Notification_Token_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Notification_Token_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "notification_token" */
export type Notification_Token_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Notification_Token_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "notification_token" */
export type Notification_Token_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Notification_Token_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "notification_token" */
export type Notification_Token_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "notification_token" */
export enum Notification_Token_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type Notification_Token_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "notification_token" */
export type Notification_Token_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Notification_Token_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "notification_token" */
export type Notification_Token_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Notification_Token_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "notification_token" */
export type Notification_Token_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "picks" */
export type Picks = {
  correct?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  game: Game;
  game_id: Scalars['Int'];
  /** An object relationship */
  group: Group;
  group_id: Scalars['Int'];
  id: Scalars['Int'];
  selected_id: Scalars['Int'];
  /** An object relationship */
  team: Team;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
  week: Scalars['Int'];
};

/** aggregated selection of "picks" */
export type Picks_Aggregate = {
  aggregate?: Maybe<Picks_Aggregate_Fields>;
  nodes: Array<Picks>;
};

/** aggregate fields of "picks" */
export type Picks_Aggregate_Fields = {
  avg?: Maybe<Picks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Picks_Max_Fields>;
  min?: Maybe<Picks_Min_Fields>;
  stddev?: Maybe<Picks_Stddev_Fields>;
  stddev_pop?: Maybe<Picks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Picks_Stddev_Samp_Fields>;
  sum?: Maybe<Picks_Sum_Fields>;
  var_pop?: Maybe<Picks_Var_Pop_Fields>;
  var_samp?: Maybe<Picks_Var_Samp_Fields>;
  variance?: Maybe<Picks_Variance_Fields>;
};

/** aggregate fields of "picks" */
export type Picks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Picks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "picks" */
export type Picks_Aggregate_Order_By = {
  avg?: Maybe<Picks_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Picks_Max_Order_By>;
  min?: Maybe<Picks_Min_Order_By>;
  stddev?: Maybe<Picks_Stddev_Order_By>;
  stddev_pop?: Maybe<Picks_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Picks_Stddev_Samp_Order_By>;
  sum?: Maybe<Picks_Sum_Order_By>;
  var_pop?: Maybe<Picks_Var_Pop_Order_By>;
  var_samp?: Maybe<Picks_Var_Samp_Order_By>;
  variance?: Maybe<Picks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "picks" */
export type Picks_Arr_Rel_Insert_Input = {
  data: Array<Picks_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Picks_On_Conflict>;
};

/** aggregate avg on columns */
export type Picks_Avg_Fields = {
  game_id?: Maybe<Scalars['Float']>;
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  selected_id?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "picks" */
export type Picks_Avg_Order_By = {
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "picks". All fields are combined with a logical 'AND'. */
export type Picks_Bool_Exp = {
  _and?: Maybe<Array<Picks_Bool_Exp>>;
  _not?: Maybe<Picks_Bool_Exp>;
  _or?: Maybe<Array<Picks_Bool_Exp>>;
  correct?: Maybe<Boolean_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  game?: Maybe<Game_Bool_Exp>;
  game_id?: Maybe<Int_Comparison_Exp>;
  group?: Maybe<Group_Bool_Exp>;
  group_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  selected_id?: Maybe<Int_Comparison_Exp>;
  team?: Maybe<Team_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  week?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "picks" */
export enum Picks_Constraint {
  /** unique or primary key constraint */
  PicksPkey = 'picks_pkey',
}

/** input type for incrementing numeric columns in table "picks" */
export type Picks_Inc_Input = {
  game_id?: Maybe<Scalars['Int']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  selected_id?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "picks" */
export type Picks_Insert_Input = {
  correct?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<Game_Obj_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['Int']>;
  group?: Maybe<Group_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  selected_id?: Maybe<Scalars['Int']>;
  team?: Maybe<Team_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Picks_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['Int']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  selected_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "picks" */
export type Picks_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Picks_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['Int']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  selected_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "picks" */
export type Picks_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** response of any mutation on the table "picks" */
export type Picks_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Picks>;
};

/** on conflict condition type for table "picks" */
export type Picks_On_Conflict = {
  constraint: Picks_Constraint;
  update_columns: Array<Picks_Update_Column>;
  where?: Maybe<Picks_Bool_Exp>;
};

/** Ordering options when selecting data from "picks". */
export type Picks_Order_By = {
  correct?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  game?: Maybe<Game_Order_By>;
  game_id?: Maybe<Order_By>;
  group?: Maybe<Group_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  team?: Maybe<Team_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** primary key columns input for table: picks */
export type Picks_Pk_Columns_Input = {
  game_id: Scalars['Int'];
  group_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** select columns of table "picks" */
export enum Picks_Select_Column {
  /** column name */
  Correct = 'correct',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  SelectedId = 'selected_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Week = 'week',
}

/** input type for updating data in table "picks" */
export type Picks_Set_Input = {
  correct?: Maybe<Scalars['Boolean']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['Int']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  selected_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Picks_Stddev_Fields = {
  game_id?: Maybe<Scalars['Float']>;
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  selected_id?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "picks" */
export type Picks_Stddev_Order_By = {
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Picks_Stddev_Pop_Fields = {
  game_id?: Maybe<Scalars['Float']>;
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  selected_id?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "picks" */
export type Picks_Stddev_Pop_Order_By = {
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Picks_Stddev_Samp_Fields = {
  game_id?: Maybe<Scalars['Float']>;
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  selected_id?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "picks" */
export type Picks_Stddev_Samp_Order_By = {
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Picks_Sum_Fields = {
  game_id?: Maybe<Scalars['Int']>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  selected_id?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "picks" */
export type Picks_Sum_Order_By = {
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** update columns of table "picks" */
export enum Picks_Update_Column {
  /** column name */
  Correct = 'correct',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GameId = 'game_id',
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  SelectedId = 'selected_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Week = 'week',
}

/** aggregate var_pop on columns */
export type Picks_Var_Pop_Fields = {
  game_id?: Maybe<Scalars['Float']>;
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  selected_id?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "picks" */
export type Picks_Var_Pop_Order_By = {
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Picks_Var_Samp_Fields = {
  game_id?: Maybe<Scalars['Float']>;
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  selected_id?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "picks" */
export type Picks_Var_Samp_Order_By = {
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Picks_Variance_Fields = {
  game_id?: Maybe<Scalars['Float']>;
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  selected_id?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "picks" */
export type Picks_Variance_Order_By = {
  game_id?: Maybe<Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  selected_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

export type Query_Root = {
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** execute function "get_available_groups" which returns "group" */
  get_available_groups: Array<Group>;
  /** execute function "get_available_groups" and query aggregates on result of table type "group" */
  get_available_groups_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "group_user" */
  group_user: Array<Group_User>;
  /** fetch aggregated fields from the table: "group_user" */
  group_user_aggregate: Group_User_Aggregate;
  /** fetch data from the table: "group_user" using primary key columns */
  group_user_by_pk?: Maybe<Group_User>;
  /** fetch data from the table: "notification_token" */
  notification_token: Array<Notification_Token>;
  /** fetch aggregated fields from the table: "notification_token" */
  notification_token_aggregate: Notification_Token_Aggregate;
  /** fetch data from the table: "notification_token" using primary key columns */
  notification_token_by_pk?: Maybe<Notification_Token>;
  /** An array relationship */
  picks: Array<Picks>;
  /** An aggregate relationship */
  picks_aggregate: Picks_Aggregate;
  /** fetch data from the table: "picks" using primary key columns */
  picks_by_pk?: Maybe<Picks>;
  /** fetch data from the table: "rankings" */
  rankings: Array<Rankings>;
  /** An aggregate relationship */
  rankings_aggregate: Rankings_Aggregate;
  /** fetch data from the table: "score" */
  score: Array<Score>;
  /** fetch aggregated fields from the table: "score" */
  score_aggregate: Score_Aggregate;
  /** fetch data from the table: "score" using primary key columns */
  score_by_pk?: Maybe<Score>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

export type Query_RootGameArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};

export type Query_RootGame_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};

export type Query_RootGame_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootGet_Available_GroupsArgs = {
  args: Get_Available_Groups_Args;
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

export type Query_RootGet_Available_Groups_AggregateArgs = {
  args: Get_Available_Groups_Args;
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

export type Query_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

export type Query_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

export type Query_RootGroup_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootGroup_UserArgs = {
  distinct_on?: Maybe<Array<Group_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_User_Order_By>>;
  where?: Maybe<Group_User_Bool_Exp>;
};

export type Query_RootGroup_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_User_Order_By>>;
  where?: Maybe<Group_User_Bool_Exp>;
};

export type Query_RootGroup_User_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootNotification_TokenArgs = {
  distinct_on?: Maybe<Array<Notification_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Token_Order_By>>;
  where?: Maybe<Notification_Token_Bool_Exp>;
};

export type Query_RootNotification_Token_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Token_Order_By>>;
  where?: Maybe<Notification_Token_Bool_Exp>;
};

export type Query_RootNotification_Token_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootPicksArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

export type Query_RootPicks_AggregateArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

export type Query_RootPicks_By_PkArgs = {
  game_id: Scalars['Int'];
  group_id: Scalars['Int'];
  user_id: Scalars['String'];
};

export type Query_RootRankingsArgs = {
  distinct_on?: Maybe<Array<Rankings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rankings_Order_By>>;
  where?: Maybe<Rankings_Bool_Exp>;
};

export type Query_RootRankings_AggregateArgs = {
  distinct_on?: Maybe<Array<Rankings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rankings_Order_By>>;
  where?: Maybe<Rankings_Bool_Exp>;
};

export type Query_RootScoreArgs = {
  distinct_on?: Maybe<Array<Score_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Score_Order_By>>;
  where?: Maybe<Score_Bool_Exp>;
};

export type Query_RootScore_AggregateArgs = {
  distinct_on?: Maybe<Array<Score_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Score_Order_By>>;
  where?: Maybe<Score_Bool_Exp>;
};

export type Query_RootScore_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};

export type Query_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};

export type Query_RootTeam_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "rankings" */
export type Rankings = {
  /** An object relationship */
  group?: Maybe<Group>;
  group_id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['bigint']>;
  rank?: Maybe<Scalars['bigint']>;
  sum?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "rankings" */
export type Rankings_Aggregate = {
  aggregate?: Maybe<Rankings_Aggregate_Fields>;
  nodes: Array<Rankings>;
};

/** aggregate fields of "rankings" */
export type Rankings_Aggregate_Fields = {
  avg?: Maybe<Rankings_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rankings_Max_Fields>;
  min?: Maybe<Rankings_Min_Fields>;
  stddev?: Maybe<Rankings_Stddev_Fields>;
  stddev_pop?: Maybe<Rankings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rankings_Stddev_Samp_Fields>;
  sum?: Maybe<Rankings_Sum_Fields>;
  var_pop?: Maybe<Rankings_Var_Pop_Fields>;
  var_samp?: Maybe<Rankings_Var_Samp_Fields>;
  variance?: Maybe<Rankings_Variance_Fields>;
};

/** aggregate fields of "rankings" */
export type Rankings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rankings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rankings" */
export type Rankings_Aggregate_Order_By = {
  avg?: Maybe<Rankings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rankings_Max_Order_By>;
  min?: Maybe<Rankings_Min_Order_By>;
  stddev?: Maybe<Rankings_Stddev_Order_By>;
  stddev_pop?: Maybe<Rankings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rankings_Stddev_Samp_Order_By>;
  sum?: Maybe<Rankings_Sum_Order_By>;
  var_pop?: Maybe<Rankings_Var_Pop_Order_By>;
  var_samp?: Maybe<Rankings_Var_Samp_Order_By>;
  variance?: Maybe<Rankings_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rankings" */
export type Rankings_Arr_Rel_Insert_Input = {
  data: Array<Rankings_Insert_Input>;
};

/** aggregate avg on columns */
export type Rankings_Avg_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rankings" */
export type Rankings_Avg_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rankings". All fields are combined with a logical 'AND'. */
export type Rankings_Bool_Exp = {
  _and?: Maybe<Array<Rankings_Bool_Exp>>;
  _not?: Maybe<Rankings_Bool_Exp>;
  _or?: Maybe<Array<Rankings_Bool_Exp>>;
  group?: Maybe<Group_Bool_Exp>;
  group_id?: Maybe<Int_Comparison_Exp>;
  points?: Maybe<Bigint_Comparison_Exp>;
  rank?: Maybe<Bigint_Comparison_Exp>;
  sum?: Maybe<Bigint_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "rankings" */
export type Rankings_Insert_Input = {
  group?: Maybe<Group_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['bigint']>;
  rank?: Maybe<Scalars['bigint']>;
  sum?: Maybe<Scalars['bigint']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rankings_Max_Fields = {
  group_id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['bigint']>;
  rank?: Maybe<Scalars['bigint']>;
  sum?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "rankings" */
export type Rankings_Max_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rankings_Min_Fields = {
  group_id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['bigint']>;
  rank?: Maybe<Scalars['bigint']>;
  sum?: Maybe<Scalars['bigint']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "rankings" */
export type Rankings_Min_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** Ordering options when selecting data from "rankings". */
export type Rankings_Order_By = {
  group?: Maybe<Group_Order_By>;
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "rankings" */
export enum Rankings_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Points = 'points',
  /** column name */
  Rank = 'rank',
  /** column name */
  Sum = 'sum',
  /** column name */
  UserId = 'user_id',
}

/** aggregate stddev on columns */
export type Rankings_Stddev_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rankings" */
export type Rankings_Stddev_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rankings_Stddev_Pop_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rankings" */
export type Rankings_Stddev_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rankings_Stddev_Samp_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rankings" */
export type Rankings_Stddev_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rankings_Sum_Fields = {
  group_id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['bigint']>;
  rank?: Maybe<Scalars['bigint']>;
  sum?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "rankings" */
export type Rankings_Sum_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Rankings_Var_Pop_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rankings" */
export type Rankings_Var_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rankings_Var_Samp_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rankings" */
export type Rankings_Var_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rankings_Variance_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rankings" */
export type Rankings_Variance_Order_By = {
  group_id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  sum?: Maybe<Order_By>;
};

/** columns and relationships of "score" */
export type Score = {
  /** An object relationship */
  group: Group;
  group_id: Scalars['Int'];
  id: Scalars['Int'];
  points: Scalars['Int'];
  rank: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
  week: Scalars['Int'];
};

/** aggregated selection of "score" */
export type Score_Aggregate = {
  aggregate?: Maybe<Score_Aggregate_Fields>;
  nodes: Array<Score>;
};

/** aggregate fields of "score" */
export type Score_Aggregate_Fields = {
  avg?: Maybe<Score_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Score_Max_Fields>;
  min?: Maybe<Score_Min_Fields>;
  stddev?: Maybe<Score_Stddev_Fields>;
  stddev_pop?: Maybe<Score_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Score_Stddev_Samp_Fields>;
  sum?: Maybe<Score_Sum_Fields>;
  var_pop?: Maybe<Score_Var_Pop_Fields>;
  var_samp?: Maybe<Score_Var_Samp_Fields>;
  variance?: Maybe<Score_Variance_Fields>;
};

/** aggregate fields of "score" */
export type Score_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Score_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "score" */
export type Score_Aggregate_Order_By = {
  avg?: Maybe<Score_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Score_Max_Order_By>;
  min?: Maybe<Score_Min_Order_By>;
  stddev?: Maybe<Score_Stddev_Order_By>;
  stddev_pop?: Maybe<Score_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Score_Stddev_Samp_Order_By>;
  sum?: Maybe<Score_Sum_Order_By>;
  var_pop?: Maybe<Score_Var_Pop_Order_By>;
  var_samp?: Maybe<Score_Var_Samp_Order_By>;
  variance?: Maybe<Score_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "score" */
export type Score_Arr_Rel_Insert_Input = {
  data: Array<Score_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Score_On_Conflict>;
};

/** aggregate avg on columns */
export type Score_Avg_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "score" */
export type Score_Avg_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "score". All fields are combined with a logical 'AND'. */
export type Score_Bool_Exp = {
  _and?: Maybe<Array<Score_Bool_Exp>>;
  _not?: Maybe<Score_Bool_Exp>;
  _or?: Maybe<Array<Score_Bool_Exp>>;
  group?: Maybe<Group_Bool_Exp>;
  group_id?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  points?: Maybe<Int_Comparison_Exp>;
  rank?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  week?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "score" */
export enum Score_Constraint {
  /** unique or primary key constraint */
  ScorePkey = 'score_pkey',
}

/** input type for incrementing numeric columns in table "score" */
export type Score_Inc_Input = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "score" */
export type Score_Insert_Input = {
  group?: Maybe<Group_Obj_Rel_Insert_Input>;
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Score_Max_Fields = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "score" */
export type Score_Max_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Score_Min_Fields = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "score" */
export type Score_Min_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** response of any mutation on the table "score" */
export type Score_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Score>;
};

/** on conflict condition type for table "score" */
export type Score_On_Conflict = {
  constraint: Score_Constraint;
  update_columns: Array<Score_Update_Column>;
  where?: Maybe<Score_Bool_Exp>;
};

/** Ordering options when selecting data from "score". */
export type Score_Order_By = {
  group?: Maybe<Group_Order_By>;
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** primary key columns input for table: score */
export type Score_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "score" */
export enum Score_Select_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Points = 'points',
  /** column name */
  Rank = 'rank',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Week = 'week',
}

/** input type for updating data in table "score" */
export type Score_Set_Input = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
  week?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Score_Stddev_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "score" */
export type Score_Stddev_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Score_Stddev_Pop_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "score" */
export type Score_Stddev_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Score_Stddev_Samp_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "score" */
export type Score_Stddev_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Score_Sum_Fields = {
  group_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  points?: Maybe<Scalars['Int']>;
  rank?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "score" */
export type Score_Sum_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** update columns of table "score" */
export enum Score_Update_Column {
  /** column name */
  GroupId = 'group_id',
  /** column name */
  Id = 'id',
  /** column name */
  Points = 'points',
  /** column name */
  Rank = 'rank',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Week = 'week',
}

/** aggregate var_pop on columns */
export type Score_Var_Pop_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "score" */
export type Score_Var_Pop_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Score_Var_Samp_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "score" */
export type Score_Var_Samp_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Score_Variance_Fields = {
  group_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  points?: Maybe<Scalars['Float']>;
  rank?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "score" */
export type Score_Variance_Order_By = {
  group_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  rank?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

export type Subscription_Root = {
  /** fetch data from the table: "game" */
  game: Array<Game>;
  /** fetch aggregated fields from the table: "game" */
  game_aggregate: Game_Aggregate;
  /** fetch data from the table: "game" using primary key columns */
  game_by_pk?: Maybe<Game>;
  /** execute function "get_available_groups" which returns "group" */
  get_available_groups: Array<Group>;
  /** execute function "get_available_groups" and query aggregates on result of table type "group" */
  get_available_groups_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "group_user" */
  group_user: Array<Group_User>;
  /** fetch aggregated fields from the table: "group_user" */
  group_user_aggregate: Group_User_Aggregate;
  /** fetch data from the table: "group_user" using primary key columns */
  group_user_by_pk?: Maybe<Group_User>;
  /** fetch data from the table: "notification_token" */
  notification_token: Array<Notification_Token>;
  /** fetch aggregated fields from the table: "notification_token" */
  notification_token_aggregate: Notification_Token_Aggregate;
  /** fetch data from the table: "notification_token" using primary key columns */
  notification_token_by_pk?: Maybe<Notification_Token>;
  /** An array relationship */
  picks: Array<Picks>;
  /** An aggregate relationship */
  picks_aggregate: Picks_Aggregate;
  /** fetch data from the table: "picks" using primary key columns */
  picks_by_pk?: Maybe<Picks>;
  /** fetch data from the table: "rankings" */
  rankings: Array<Rankings>;
  /** An aggregate relationship */
  rankings_aggregate: Rankings_Aggregate;
  /** fetch data from the table: "score" */
  score: Array<Score>;
  /** fetch aggregated fields from the table: "score" */
  score_aggregate: Score_Aggregate;
  /** fetch data from the table: "score" using primary key columns */
  score_by_pk?: Maybe<Score>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};

export type Subscription_RootGameArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};

export type Subscription_RootGame_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};

export type Subscription_RootGame_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootGet_Available_GroupsArgs = {
  args: Get_Available_Groups_Args;
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

export type Subscription_RootGet_Available_Groups_AggregateArgs = {
  args: Get_Available_Groups_Args;
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

export type Subscription_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootGroup_UserArgs = {
  distinct_on?: Maybe<Array<Group_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_User_Order_By>>;
  where?: Maybe<Group_User_Bool_Exp>;
};

export type Subscription_RootGroup_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_User_Order_By>>;
  where?: Maybe<Group_User_Bool_Exp>;
};

export type Subscription_RootGroup_User_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootNotification_TokenArgs = {
  distinct_on?: Maybe<Array<Notification_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Token_Order_By>>;
  where?: Maybe<Notification_Token_Bool_Exp>;
};

export type Subscription_RootNotification_Token_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Token_Order_By>>;
  where?: Maybe<Notification_Token_Bool_Exp>;
};

export type Subscription_RootNotification_Token_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootPicksArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

export type Subscription_RootPicks_AggregateArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

export type Subscription_RootPicks_By_PkArgs = {
  game_id: Scalars['Int'];
  group_id: Scalars['Int'];
  user_id: Scalars['String'];
};

export type Subscription_RootRankingsArgs = {
  distinct_on?: Maybe<Array<Rankings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rankings_Order_By>>;
  where?: Maybe<Rankings_Bool_Exp>;
};

export type Subscription_RootRankings_AggregateArgs = {
  distinct_on?: Maybe<Array<Rankings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rankings_Order_By>>;
  where?: Maybe<Rankings_Bool_Exp>;
};

export type Subscription_RootScoreArgs = {
  distinct_on?: Maybe<Array<Score_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Score_Order_By>>;
  where?: Maybe<Score_Bool_Exp>;
};

export type Subscription_RootScore_AggregateArgs = {
  distinct_on?: Maybe<Array<Score_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Score_Order_By>>;
  where?: Maybe<Score_Bool_Exp>;
};

export type Subscription_RootScore_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};

export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};

export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "team" */
export type Team = {
  id: Scalars['Int'];
  name: Scalars['String'];
  record: Scalars['String'];
  short_name: Scalars['String'];
  streak: Scalars['Int'];
  week?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "team" */
export type Team_Aggregate = {
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

/** aggregate fields of "team" */
export type Team_Aggregate_Fields = {
  avg?: Maybe<Team_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
  stddev?: Maybe<Team_Stddev_Fields>;
  stddev_pop?: Maybe<Team_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Team_Stddev_Samp_Fields>;
  sum?: Maybe<Team_Sum_Fields>;
  var_pop?: Maybe<Team_Var_Pop_Fields>;
  var_samp?: Maybe<Team_Var_Samp_Fields>;
  variance?: Maybe<Team_Variance_Fields>;
};

/** aggregate fields of "team" */
export type Team_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Team_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Team_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
export type Team_Bool_Exp = {
  _and?: Maybe<Array<Team_Bool_Exp>>;
  _not?: Maybe<Team_Bool_Exp>;
  _or?: Maybe<Array<Team_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  record?: Maybe<String_Comparison_Exp>;
  short_name?: Maybe<String_Comparison_Exp>;
  streak?: Maybe<Int_Comparison_Exp>;
  week?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "team" */
export enum Team_Constraint {
  /** unique or primary key constraint */
  TeamNameKey = 'team_name_key',
  /** unique or primary key constraint */
  TeamPkey = 'team_pkey',
  /** unique or primary key constraint */
  TeamShortNameKey = 'team_short_name_key',
}

/** input type for incrementing numeric columns in table "team" */
export type Team_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  streak?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "team" */
export type Team_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  record?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  streak?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Team_Max_Fields = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  record?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  streak?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Team_Min_Fields = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  record?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  streak?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "team" */
export type Team_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Team>;
};

/** input type for inserting object relation for remote table "team" */
export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Team_On_Conflict>;
};

/** on conflict condition type for table "team" */
export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns: Array<Team_Update_Column>;
  where?: Maybe<Team_Bool_Exp>;
};

/** Ordering options when selecting data from "team". */
export type Team_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  record?: Maybe<Order_By>;
  short_name?: Maybe<Order_By>;
  streak?: Maybe<Order_By>;
  week?: Maybe<Order_By>;
};

/** primary key columns input for table: team */
export type Team_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "team" */
export enum Team_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Record = 'record',
  /** column name */
  ShortName = 'short_name',
  /** column name */
  Streak = 'streak',
  /** column name */
  Week = 'week',
}

/** input type for updating data in table "team" */
export type Team_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  record?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  streak?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Team_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Team_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Team_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Team_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  streak?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
};

/** update columns of table "team" */
export enum Team_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Record = 'record',
  /** column name */
  ShortName = 'short_name',
  /** column name */
  Streak = 'streak',
  /** column name */
  Week = 'week',
}

/** aggregate var_pop on columns */
export type Team_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Team_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Team_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  streak?: Maybe<Scalars['Float']>;
  week?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>;
  _gt?: Maybe<Scalars['timetz']>;
  _gte?: Maybe<Scalars['timetz']>;
  _in?: Maybe<Array<Scalars['timetz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timetz']>;
  _lte?: Maybe<Scalars['timetz']>;
  _neq?: Maybe<Scalars['timetz']>;
  _nin?: Maybe<Array<Scalars['timetz']>>;
};

/** columns and relationships of "user" */
export type User = {
  created_at: Scalars['timestamptz'];
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** An array relationship */
  group_users: Array<Group_User>;
  /** An aggregate relationship */
  group_users_aggregate: Group_User_Aggregate;
  id: Scalars['String'];
  /** An array relationship */
  notification_tokens: Array<Notification_Token>;
  /** An aggregate relationship */
  notification_tokens_aggregate: Notification_Token_Aggregate;
  notifications?: Maybe<Scalars['Boolean']>;
  photo_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  picks: Array<Picks>;
  /** An aggregate relationship */
  picks_aggregate: Picks_Aggregate;
  /** An array relationship */
  scores: Array<Score>;
  /** An aggregate relationship */
  scores_aggregate: Score_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "user" */
export type UserGroup_UsersArgs = {
  distinct_on?: Maybe<Array<Group_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_User_Order_By>>;
  where?: Maybe<Group_User_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserGroup_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_User_Order_By>>;
  where?: Maybe<Group_User_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserNotification_TokensArgs = {
  distinct_on?: Maybe<Array<Notification_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Token_Order_By>>;
  where?: Maybe<Notification_Token_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserNotification_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Notification_Token_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Notification_Token_Order_By>>;
  where?: Maybe<Notification_Token_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserPicksArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserPicks_AggregateArgs = {
  distinct_on?: Maybe<Array<Picks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Picks_Order_By>>;
  where?: Maybe<Picks_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserScoresArgs = {
  distinct_on?: Maybe<Array<Score_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Score_Order_By>>;
  where?: Maybe<Score_Bool_Exp>;
};

/** columns and relationships of "user" */
export type UserScores_AggregateArgs = {
  distinct_on?: Maybe<Array<Score_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Score_Order_By>>;
  where?: Maybe<Score_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  group_users?: Maybe<Group_User_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  notification_tokens?: Maybe<Notification_Token_Bool_Exp>;
  notifications?: Maybe<Boolean_Comparison_Exp>;
  photo_url?: Maybe<String_Comparison_Exp>;
  picks?: Maybe<Picks_Bool_Exp>;
  scores?: Maybe<Score_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserDisplayNameKey = 'user_display_name_key',
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  group_users?: Maybe<Group_User_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  notification_tokens?: Maybe<Notification_Token_Arr_Rel_Insert_Input>;
  notifications?: Maybe<Scalars['Boolean']>;
  photo_url?: Maybe<Scalars['String']>;
  picks?: Maybe<Picks_Arr_Rel_Insert_Input>;
  scores?: Maybe<Score_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  group_users_aggregate?: Maybe<Group_User_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  notification_tokens_aggregate?: Maybe<Notification_Token_Aggregate_Order_By>;
  notifications?: Maybe<Order_By>;
  photo_url?: Maybe<Order_By>;
  picks_aggregate?: Maybe<Picks_Aggregate_Order_By>;
  scores_aggregate?: Maybe<Score_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Notifications = 'notifications',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  notifications?: Maybe<Scalars['Boolean']>;
  photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Notifications = 'notifications',
  /** column name */
  PhotoUrl = 'photo_url',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type LeaderboardQueryVariables = Exact<{
  group_id: Scalars['Int'];
}>;

export type LeaderboardQuery = {
  group_by_pk?: Maybe<Pick<Group, 'id' | 'display_name'>>;
  rankings: Array<
    Pick<Rankings, 'points' | 'rank' | 'sum'> & {
      user?: Maybe<Pick<User, 'display_name' | 'id' | 'photo_url'>>;
    }
  >;
};

export type PicksQueryVariables = Exact<{
  user_id: Scalars['String'];
  group_id: Scalars['Int'];
  week: Scalars['Int'];
}>;

export type PicksQuery = {
  user_by_pk?: Maybe<
    Pick<User, 'id'> & {
      picks_aggregate: {
        aggregate?: Maybe<Pick<Picks_Aggregate_Fields, 'count'>>;
      };
    }
  >;
  game_aggregate: {aggregate?: Maybe<Pick<Game_Aggregate_Fields, 'count'>>};
};

export type DashbaordQueryVariables = Exact<{
  group_id: Scalars['Int'];
  user_id: Scalars['String'];
}>;

export type DashbaordQuery = {
  rankings: Array<Pick<Rankings, 'points' | 'rank'>>;
};

export type Game_DetailsFragment = Pick<
  Game,
  | 'date'
  | 'quarter'
  | 'home_score'
  | 'vis_score'
  | 'week'
  | 'time'
  | 'time_remaning'
  | 'id'
> & {
  home_team: Pick<Team, 'id' | 'short_name' | 'record'>;
  vis_team: Pick<Team, 'id' | 'short_name' | 'record'>;
  picks: Array<
    Pick<Picks, 'id' | 'group_id' | 'selected_id' | 'correct'> & {
      user: Pick<User, 'id' | 'display_name'>;
    }
  >;
  winning_team?: Maybe<Pick<Team, 'id' | 'short_name'>>;
};

export type GetGamesForWeekQueryVariables = Exact<{
  week: Scalars['Int'];
  group_id: Scalars['Int'];
}>;

export type GetGamesForWeekQuery = {
  upcomingGames: Array<Game_DetailsFragment>;
  inProgressGames: Array<Game_DetailsFragment>;
  completedGames: Array<Game_DetailsFragment>;
};

export type SavePickMutationVariables = Exact<{
  game_id?: Maybe<Scalars['Int']>;
  selected_id?: Maybe<Scalars['Int']>;
  group_id?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
}>;

export type SavePickMutation = {
  insert_picks?: Maybe<
    Pick<Picks_Mutation_Response, 'affected_rows'> & {
      returning: Array<Pick<Picks, 'selected_id' | 'game_id' | 'id'>>;
    }
  >;
};

export type GetGroupsQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;

export type GetGroupsQuery = {
  group_user: Array<{
    group: Pick<Group, 'display_name' | 'id' | 'admin_id'> & {
      rankings: Array<Pick<Rankings, 'rank' | 'points'>>;
      members: Array<{user: Pick<User, 'photo_url' | 'id' | 'display_name'>}>;
    };
  }>;
};

export type FetchAvailableGroupsQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;

export type FetchAvailableGroupsQuery = {
  get_available_groups: Array<
    Pick<Group, 'id' | 'display_name' | 'admin_id' | 'private' | 'passcode'> & {
      members_aggregate: {
        aggregate?: Maybe<Pick<Group_User_Aggregate_Fields, 'count'>>;
      };
    }
  >;
};

export type JoinGroupMutationVariables = Exact<{
  user_id: Scalars['String'];
  group_id: Scalars['Int'];
}>;

export type JoinGroupMutation = {
  insert_group_user?: Maybe<
    Pick<Group_User_Mutation_Response, 'affected_rows'>
  >;
};

export type RemoveFromGroupMutationVariables = Exact<{
  user_id: Scalars['String'];
  group_id: Scalars['Int'];
}>;

export type RemoveFromGroupMutation = {
  delete_group_user?: Maybe<
    Pick<Group_User_Mutation_Response, 'affected_rows'>
  >;
};

export type GetMembersQueryVariables = Exact<{
  group_id: Scalars['Int'];
}>;

export type GetMembersQuery = {
  group_by_pk?: Maybe<{
    members: Array<{user: Pick<User, 'id' | 'photo_url' | 'display_name'>}>;
  }>;
};

export type CreateGroupMutationVariables = Exact<{
  admin_id: Scalars['String'];
  display_name: Scalars['String'];
  private: Scalars['Boolean'];
  passcode?: Maybe<Scalars['String']>;
}>;

export type CreateGroupMutation = {
  insert_group_user?: Maybe<{
    returning: Array<
      Pick<Group_User, 'id'> & {
        group: Pick<Group, 'id' | 'admin_id' | 'display_name'> & {
          members: Array<{
            user: Pick<User, 'photo_url' | 'display_name' | 'id'>;
          }>;
        };
      }
    >;
  }>;
};

export type GetGroupByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;

export type GetGroupByIdQuery = {
  group_by_pk?: Maybe<
    Pick<Group, 'id' | 'display_name' | 'admin_id' | 'private' | 'passcode'> & {
      members_aggregate: {
        aggregate?: Maybe<Pick<Group_User_Aggregate_Fields, 'count'>>;
      };
    }
  >;
};

export type LoadUserQueryVariables = Exact<{
  user_id: Scalars['String'];
}>;

export type LoadUserQuery = {
  user_by_pk?: Maybe<Pick<User, 'photo_url' | 'display_name' | 'id'>>;
};

export type SaveNotificationTokenMutationVariables = Exact<{
  user_id: Scalars['String'];
  token: Scalars['String'];
}>;

export type SaveNotificationTokenMutation = {
  insert_notification_token?: Maybe<
    Pick<Notification_Token_Mutation_Response, 'affected_rows'>
  >;
};

export type UpdateUserMutationVariables = Exact<{
  user_id: Scalars['String'];
  displayName: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
}>;

export type UpdateUserMutation = {
  insert_user?: Maybe<Pick<User_Mutation_Response, 'affected_rows'>>;
};

export type UpdatePhotoMutationVariables = Exact<{
  user_id?: Maybe<Scalars['String']>;
  photo_url?: Maybe<Scalars['String']>;
}>;

export type UpdatePhotoMutation = {
  update_user?: Maybe<Pick<User_Mutation_Response, 'affected_rows'>>;
};

export const Game_DetailsFragmentDoc = gql`
  fragment game_details on game {
    home_team {
      id
      short_name
      record
    }
    date
    vis_team {
      id
      short_name
      record
    }
    picks(where: {group_id: {_eq: $group_id}}) {
      id
      user {
        id
        display_name
      }
      group_id
      selected_id
      correct
    }
    quarter
    winning_team {
      id
      short_name
    }
    home_score
    vis_score
    week
    time
    time_remaning
    id
  }
`;
export const LeaderboardDocument = gql`
  query Leaderboard($group_id: Int!) {
    group_by_pk(id: $group_id) {
      id
      display_name
    }
    rankings(where: {group_id: {_eq: $group_id}}, order_by: {rank: asc}) {
      points
      rank
      sum
      user {
        display_name
        id
        photo_url
      }
    }
  }
`;

/**
 * __useLeaderboardQuery__
 *
 * To run a query within a React component, call `useLeaderboardQuery` and pass it any options that fit your needs.
 * When your component renders, `useLeaderboardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLeaderboardQuery({
 *   variables: {
 *      group_id: // value for 'group_id'
 *   },
 * });
 */
export function useLeaderboardQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    LeaderboardQuery,
    LeaderboardQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<LeaderboardQuery, LeaderboardQueryVariables>(
    LeaderboardDocument,
    baseOptions,
  );
}
export function useLeaderboardLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    LeaderboardQuery,
    LeaderboardQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    LeaderboardQuery,
    LeaderboardQueryVariables
  >(LeaderboardDocument, baseOptions);
}
export type LeaderboardQueryHookResult = ReturnType<typeof useLeaderboardQuery>;
export type LeaderboardLazyQueryHookResult = ReturnType<
  typeof useLeaderboardLazyQuery
>;
export type LeaderboardQueryResult = ApolloReactHooks.QueryResult<
  LeaderboardQuery,
  LeaderboardQueryVariables
>;
export const PicksDocument = gql`
  query Picks($user_id: String!, $group_id: Int!, $week: Int!) {
    user_by_pk(id: $user_id) {
      id
      picks_aggregate(
        where: {_and: {group_id: {_eq: $group_id}}, week: {_eq: $week}}
      ) {
        aggregate {
          count
        }
      }
    }
    game_aggregate(where: {week: {_eq: $week}}) {
      aggregate {
        count
      }
    }
  }
`;

/**
 * __usePicksQuery__
 *
 * To run a query within a React component, call `usePicksQuery` and pass it any options that fit your needs.
 * When your component renders, `usePicksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePicksQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      group_id: // value for 'group_id'
 *      week: // value for 'week'
 *   },
 * });
 */
export function usePicksQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    PicksQuery,
    PicksQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<PicksQuery, PicksQueryVariables>(
    PicksDocument,
    baseOptions,
  );
}
export function usePicksLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    PicksQuery,
    PicksQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<PicksQuery, PicksQueryVariables>(
    PicksDocument,
    baseOptions,
  );
}
export type PicksQueryHookResult = ReturnType<typeof usePicksQuery>;
export type PicksLazyQueryHookResult = ReturnType<typeof usePicksLazyQuery>;
export type PicksQueryResult = ApolloReactHooks.QueryResult<
  PicksQuery,
  PicksQueryVariables
>;
export const DashbaordDocument = gql`
  query Dashbaord($group_id: Int!, $user_id: String!) {
    rankings(
      where: {user_id: {_eq: $user_id}, _and: {group_id: {_eq: $group_id}}}
    ) {
      points
      rank
    }
  }
`;

/**
 * __useDashbaordQuery__
 *
 * To run a query within a React component, call `useDashbaordQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashbaordQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashbaordQuery({
 *   variables: {
 *      group_id: // value for 'group_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useDashbaordQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    DashbaordQuery,
    DashbaordQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<DashbaordQuery, DashbaordQueryVariables>(
    DashbaordDocument,
    baseOptions,
  );
}
export function useDashbaordLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    DashbaordQuery,
    DashbaordQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<DashbaordQuery, DashbaordQueryVariables>(
    DashbaordDocument,
    baseOptions,
  );
}
export type DashbaordQueryHookResult = ReturnType<typeof useDashbaordQuery>;
export type DashbaordLazyQueryHookResult = ReturnType<
  typeof useDashbaordLazyQuery
>;
export type DashbaordQueryResult = ApolloReactHooks.QueryResult<
  DashbaordQuery,
  DashbaordQueryVariables
>;
export const GetGamesForWeekDocument = gql`
  query getGamesForWeek($week: Int!, $group_id: Int!) {
    upcomingGames: game(
      where: {
        winner_id: {_is_null: true}
        week: {_eq: $week}
        quarter: {_is_null: true}
      }
      order_by: {date: asc, time: asc}
    ) {
      ...game_details
    }
    inProgressGames: game(
      where: {
        winner_id: {_is_null: true}
        week: {_eq: $week}
        quarter: {_is_null: false}
      }
      order_by: {date: asc, time: asc}
    ) {
      ...game_details
    }
    completedGames: game(
      where: {winner_id: {_is_null: false}, week: {_eq: $week}}
      order_by: {date: asc, time: asc}
    ) {
      ...game_details
    }
  }
  ${Game_DetailsFragmentDoc}
`;

/**
 * __useGetGamesForWeekQuery__
 *
 * To run a query within a React component, call `useGetGamesForWeekQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesForWeekQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesForWeekQuery({
 *   variables: {
 *      week: // value for 'week'
 *      group_id: // value for 'group_id'
 *   },
 * });
 */
export function useGetGamesForWeekQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetGamesForWeekQuery,
    GetGamesForWeekQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    GetGamesForWeekQuery,
    GetGamesForWeekQueryVariables
  >(GetGamesForWeekDocument, baseOptions);
}
export function useGetGamesForWeekLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetGamesForWeekQuery,
    GetGamesForWeekQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    GetGamesForWeekQuery,
    GetGamesForWeekQueryVariables
  >(GetGamesForWeekDocument, baseOptions);
}
export type GetGamesForWeekQueryHookResult = ReturnType<
  typeof useGetGamesForWeekQuery
>;
export type GetGamesForWeekLazyQueryHookResult = ReturnType<
  typeof useGetGamesForWeekLazyQuery
>;
export type GetGamesForWeekQueryResult = ApolloReactHooks.QueryResult<
  GetGamesForWeekQuery,
  GetGamesForWeekQueryVariables
>;
export const SavePickDocument = gql`
  mutation savePick(
    $game_id: Int
    $selected_id: Int
    $group_id: Int
    $week: Int
  ) {
    insert_picks(
      objects: {
        game_id: $game_id
        selected_id: $selected_id
        group_id: $group_id
        week: $week
      }
      on_conflict: {constraint: picks_pkey, update_columns: selected_id}
    ) {
      affected_rows
      returning {
        selected_id
        game_id
        id
      }
    }
  }
`;
export type SavePickMutationFn = ApolloReactHooks.MutationFunction<
  SavePickMutation,
  SavePickMutationVariables
>;

/**
 * __useSavePickMutation__
 *
 * To run a mutation, you first call `useSavePickMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePickMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePickMutation, { data, loading, error }] = useSavePickMutation({
 *   variables: {
 *      game_id: // value for 'game_id'
 *      selected_id: // value for 'selected_id'
 *      group_id: // value for 'group_id'
 *      week: // value for 'week'
 *   },
 * });
 */
export function useSavePickMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SavePickMutation,
    SavePickMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    SavePickMutation,
    SavePickMutationVariables
  >(SavePickDocument, baseOptions);
}
export type SavePickMutationHookResult = ReturnType<typeof useSavePickMutation>;
export type SavePickMutationResult = ApolloReactHooks.MutationResult<
  SavePickMutation
>;
export type SavePickMutationOptions = ApolloReactHooks.BaseMutationOptions<
  SavePickMutation,
  SavePickMutationVariables
>;
export const GetGroupsDocument = gql`
  query getGroups($user_id: String!) {
    group_user(where: {user_id: {_eq: $user_id}}) {
      group {
        display_name
        id
        admin_id
        rankings(where: {user_id: {_eq: $user_id}}) {
          rank
          points
        }
        members {
          user {
            photo_url
            id
            display_name
          }
        }
      }
    }
  }
`;

/**
 * __useGetGroupsQuery__
 *
 * To run a query within a React component, call `useGetGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupsQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetGroupsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetGroupsQuery,
    GetGroupsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<GetGroupsQuery, GetGroupsQueryVariables>(
    GetGroupsDocument,
    baseOptions,
  );
}
export function useGetGroupsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetGroupsQuery,
    GetGroupsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<GetGroupsQuery, GetGroupsQueryVariables>(
    GetGroupsDocument,
    baseOptions,
  );
}
export type GetGroupsQueryHookResult = ReturnType<typeof useGetGroupsQuery>;
export type GetGroupsLazyQueryHookResult = ReturnType<
  typeof useGetGroupsLazyQuery
>;
export type GetGroupsQueryResult = ApolloReactHooks.QueryResult<
  GetGroupsQuery,
  GetGroupsQueryVariables
>;
export const FetchAvailableGroupsDocument = gql`
  query FetchAvailableGroups($user_id: String!) {
    get_available_groups(args: {user_id: $user_id}, distinct_on: id) {
      id
      display_name
      admin_id
      private
      passcode
      members_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useFetchAvailableGroupsQuery__
 *
 * To run a query within a React component, call `useFetchAvailableGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchAvailableGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchAvailableGroupsQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useFetchAvailableGroupsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    FetchAvailableGroupsQuery,
    FetchAvailableGroupsQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    FetchAvailableGroupsQuery,
    FetchAvailableGroupsQueryVariables
  >(FetchAvailableGroupsDocument, baseOptions);
}
export function useFetchAvailableGroupsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    FetchAvailableGroupsQuery,
    FetchAvailableGroupsQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    FetchAvailableGroupsQuery,
    FetchAvailableGroupsQueryVariables
  >(FetchAvailableGroupsDocument, baseOptions);
}
export type FetchAvailableGroupsQueryHookResult = ReturnType<
  typeof useFetchAvailableGroupsQuery
>;
export type FetchAvailableGroupsLazyQueryHookResult = ReturnType<
  typeof useFetchAvailableGroupsLazyQuery
>;
export type FetchAvailableGroupsQueryResult = ApolloReactHooks.QueryResult<
  FetchAvailableGroupsQuery,
  FetchAvailableGroupsQueryVariables
>;
export const JoinGroupDocument = gql`
  mutation JoinGroup($user_id: String!, $group_id: Int!) {
    insert_group_user(objects: {user_id: $user_id, group_id: $group_id}) {
      affected_rows
    }
  }
`;
export type JoinGroupMutationFn = ApolloReactHooks.MutationFunction<
  JoinGroupMutation,
  JoinGroupMutationVariables
>;

/**
 * __useJoinGroupMutation__
 *
 * To run a mutation, you first call `useJoinGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinGroupMutation, { data, loading, error }] = useJoinGroupMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      group_id: // value for 'group_id'
 *   },
 * });
 */
export function useJoinGroupMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    JoinGroupMutation,
    JoinGroupMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    JoinGroupMutation,
    JoinGroupMutationVariables
  >(JoinGroupDocument, baseOptions);
}
export type JoinGroupMutationHookResult = ReturnType<
  typeof useJoinGroupMutation
>;
export type JoinGroupMutationResult = ApolloReactHooks.MutationResult<
  JoinGroupMutation
>;
export type JoinGroupMutationOptions = ApolloReactHooks.BaseMutationOptions<
  JoinGroupMutation,
  JoinGroupMutationVariables
>;
export const RemoveFromGroupDocument = gql`
  mutation removeFromGroup($user_id: String!, $group_id: Int!) {
    delete_group_user(
      where: {user_id: {_eq: $user_id}, group_id: {_eq: $group_id}}
    ) {
      affected_rows
    }
  }
`;
export type RemoveFromGroupMutationFn = ApolloReactHooks.MutationFunction<
  RemoveFromGroupMutation,
  RemoveFromGroupMutationVariables
>;

/**
 * __useRemoveFromGroupMutation__
 *
 * To run a mutation, you first call `useRemoveFromGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromGroupMutation, { data, loading, error }] = useRemoveFromGroupMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      group_id: // value for 'group_id'
 *   },
 * });
 */
export function useRemoveFromGroupMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    RemoveFromGroupMutation,
    RemoveFromGroupMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    RemoveFromGroupMutation,
    RemoveFromGroupMutationVariables
  >(RemoveFromGroupDocument, baseOptions);
}
export type RemoveFromGroupMutationHookResult = ReturnType<
  typeof useRemoveFromGroupMutation
>;
export type RemoveFromGroupMutationResult = ApolloReactHooks.MutationResult<
  RemoveFromGroupMutation
>;
export type RemoveFromGroupMutationOptions = ApolloReactHooks.BaseMutationOptions<
  RemoveFromGroupMutation,
  RemoveFromGroupMutationVariables
>;
export const GetMembersDocument = gql`
  query getMembers($group_id: Int!) {
    group_by_pk(id: $group_id) {
      members {
        user {
          id
          photo_url
          display_name
        }
      }
    }
  }
`;

/**
 * __useGetMembersQuery__
 *
 * To run a query within a React component, call `useGetMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersQuery({
 *   variables: {
 *      group_id: // value for 'group_id'
 *   },
 * });
 */
export function useGetMembersQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetMembersQuery,
    GetMembersQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<GetMembersQuery, GetMembersQueryVariables>(
    GetMembersDocument,
    baseOptions,
  );
}
export function useGetMembersLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetMembersQuery,
    GetMembersQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    GetMembersQuery,
    GetMembersQueryVariables
  >(GetMembersDocument, baseOptions);
}
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>;
export type GetMembersLazyQueryHookResult = ReturnType<
  typeof useGetMembersLazyQuery
>;
export type GetMembersQueryResult = ApolloReactHooks.QueryResult<
  GetMembersQuery,
  GetMembersQueryVariables
>;
export const CreateGroupDocument = gql`
  mutation CreateGroup(
    $admin_id: String!
    $display_name: String!
    $private: Boolean!
    $passcode: String
  ) {
    insert_group_user(
      objects: {
        group: {
          data: {
            admin_id: $admin_id
            private: $private
            display_name: $display_name
            passcode: $passcode
          }
        }
        user_id: $admin_id
      }
    ) {
      returning {
        id
        group {
          id
          admin_id
          display_name
          members {
            user {
              photo_url
              display_name
              id
            }
          }
        }
      }
    }
  }
`;
export type CreateGroupMutationFn = ApolloReactHooks.MutationFunction<
  CreateGroupMutation,
  CreateGroupMutationVariables
>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      admin_id: // value for 'admin_id'
 *      display_name: // value for 'display_name'
 *      private: // value for 'private'
 *      passcode: // value for 'passcode'
 *   },
 * });
 */
export function useCreateGroupMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    CreateGroupMutation,
    CreateGroupMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    CreateGroupMutation,
    CreateGroupMutationVariables
  >(CreateGroupDocument, baseOptions);
}
export type CreateGroupMutationHookResult = ReturnType<
  typeof useCreateGroupMutation
>;
export type CreateGroupMutationResult = ApolloReactHooks.MutationResult<
  CreateGroupMutation
>;
export type CreateGroupMutationOptions = ApolloReactHooks.BaseMutationOptions<
  CreateGroupMutation,
  CreateGroupMutationVariables
>;
export const GetGroupByIdDocument = gql`
  query getGroupById($id: Int!) {
    group_by_pk(id: $id) {
      id
      display_name
      admin_id
      private
      passcode
      members_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;

/**
 * __useGetGroupByIdQuery__
 *
 * To run a query within a React component, call `useGetGroupByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGroupByIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetGroupByIdQuery,
    GetGroupByIdQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<
    GetGroupByIdQuery,
    GetGroupByIdQueryVariables
  >(GetGroupByIdDocument, baseOptions);
}
export function useGetGroupByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetGroupByIdQuery,
    GetGroupByIdQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    GetGroupByIdQuery,
    GetGroupByIdQueryVariables
  >(GetGroupByIdDocument, baseOptions);
}
export type GetGroupByIdQueryHookResult = ReturnType<
  typeof useGetGroupByIdQuery
>;
export type GetGroupByIdLazyQueryHookResult = ReturnType<
  typeof useGetGroupByIdLazyQuery
>;
export type GetGroupByIdQueryResult = ApolloReactHooks.QueryResult<
  GetGroupByIdQuery,
  GetGroupByIdQueryVariables
>;
export const LoadUserDocument = gql`
  query loadUser($user_id: String!) {
    user_by_pk(id: $user_id) {
      photo_url
      display_name
      id
    }
  }
`;

/**
 * __useLoadUserQuery__
 *
 * To run a query within a React component, call `useLoadUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoadUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoadUserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useLoadUserQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    LoadUserQuery,
    LoadUserQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<LoadUserQuery, LoadUserQueryVariables>(
    LoadUserDocument,
    baseOptions,
  );
}
export function useLoadUserLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    LoadUserQuery,
    LoadUserQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<LoadUserQuery, LoadUserQueryVariables>(
    LoadUserDocument,
    baseOptions,
  );
}
export type LoadUserQueryHookResult = ReturnType<typeof useLoadUserQuery>;
export type LoadUserLazyQueryHookResult = ReturnType<
  typeof useLoadUserLazyQuery
>;
export type LoadUserQueryResult = ApolloReactHooks.QueryResult<
  LoadUserQuery,
  LoadUserQueryVariables
>;
export const SaveNotificationTokenDocument = gql`
  mutation SaveNotificationToken($user_id: String!, $token: String!) {
    insert_notification_token(objects: {user_id: $user_id, token: $token}) {
      affected_rows
    }
  }
`;
export type SaveNotificationTokenMutationFn = ApolloReactHooks.MutationFunction<
  SaveNotificationTokenMutation,
  SaveNotificationTokenMutationVariables
>;

/**
 * __useSaveNotificationTokenMutation__
 *
 * To run a mutation, you first call `useSaveNotificationTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveNotificationTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveNotificationTokenMutation, { data, loading, error }] = useSaveNotificationTokenMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useSaveNotificationTokenMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SaveNotificationTokenMutation,
    SaveNotificationTokenMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    SaveNotificationTokenMutation,
    SaveNotificationTokenMutationVariables
  >(SaveNotificationTokenDocument, baseOptions);
}
export type SaveNotificationTokenMutationHookResult = ReturnType<
  typeof useSaveNotificationTokenMutation
>;
export type SaveNotificationTokenMutationResult = ApolloReactHooks.MutationResult<
  SaveNotificationTokenMutation
>;
export type SaveNotificationTokenMutationOptions = ApolloReactHooks.BaseMutationOptions<
  SaveNotificationTokenMutation,
  SaveNotificationTokenMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation updateUser(
    $user_id: String!
    $displayName: String!
    $photoUrl: String
  ) {
    insert_user(
      objects: {id: $user_id, display_name: $displayName, photo_url: $photoUrl}
      on_conflict: {
        constraint: user_pkey
        update_columns: [display_name, photo_url]
      }
    ) {
      affected_rows
    }
  }
`;
export type UpdateUserMutationFn = ApolloReactHooks.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      displayName: // value for 'displayName'
 *      photoUrl: // value for 'photoUrl'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UpdateUserDocument, baseOptions);
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult = ApolloReactHooks.MutationResult<
  UpdateUserMutation
>;
export type UpdateUserMutationOptions = ApolloReactHooks.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const UpdatePhotoDocument = gql`
  mutation updatePhoto($user_id: String, $photo_url: String) {
    update_user(where: {id: {_eq: $user_id}}, _set: {photo_url: $photo_url}) {
      affected_rows
    }
  }
`;
export type UpdatePhotoMutationFn = ApolloReactHooks.MutationFunction<
  UpdatePhotoMutation,
  UpdatePhotoMutationVariables
>;

/**
 * __useUpdatePhotoMutation__
 *
 * To run a mutation, you first call `useUpdatePhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhotoMutation, { data, loading, error }] = useUpdatePhotoMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      photo_url: // value for 'photo_url'
 *   },
 * });
 */
export function useUpdatePhotoMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdatePhotoMutation,
    UpdatePhotoMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdatePhotoMutation,
    UpdatePhotoMutationVariables
  >(UpdatePhotoDocument, baseOptions);
}
export type UpdatePhotoMutationHookResult = ReturnType<
  typeof useUpdatePhotoMutation
>;
export type UpdatePhotoMutationResult = ApolloReactHooks.MutationResult<
  UpdatePhotoMutation
>;
export type UpdatePhotoMutationOptions = ApolloReactHooks.BaseMutationOptions<
  UpdatePhotoMutation,
  UpdatePhotoMutationVariables
>;
