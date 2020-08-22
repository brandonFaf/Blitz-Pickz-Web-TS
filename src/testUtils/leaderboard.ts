import userData from './userData';
export const Leaderboard1 = {
  group_by_pk: {
    id: 1,
    display_name: 'test group 1'
  },
  rankings: [
    {
      points: 40,
      rank: 1,
      user: userData[0]
    }
  ]
};

export const Leaderboard2 = {
  group_by_pk: {
    id: 1,
    display_name: 'test group 2'
  },
  rankings: [
    {
      points: 40,
      rank: 1,
      user: userData[0]
    },
    {
      points: 38,
      rank: 2,
      user: userData[1]
    }
  ]
};
export const Leaderboard3 = {
  group_by_pk: {
    id: 1,
    display_name: 'Avengers'
  },
  rankings: [
    {
      points: 40,
      rank: 1,
      user: userData[0]
    },
    {
      points: 38,
      rank: 2,
      user: userData[1]
    },
    {
      points: 37,
      rank: 3,
      user: userData[2]
    },
    {
      points: 37,
      rank: 3,
      user: userData[3]
    },
    {
      points: 32,
      rank: 5,
      user: userData[4]
    },
    {
      points: 31,
      rank: 6,
      user: userData[5]
    },
    {
      points: 27,
      rank: 7,
      user: userData[6]
    }
  ]
};
