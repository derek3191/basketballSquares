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
