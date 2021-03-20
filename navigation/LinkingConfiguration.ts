import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Scoreboard: {
            screens: {
              ScoreboardScreen: 'scoreboard',
            },
          },
          GameDetail: {
            screens: {
              GameDetailScreen: 'gameDetail',
            },
          },
          Squares: {
            screens: {
              SquaresScreen: 'squares',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
