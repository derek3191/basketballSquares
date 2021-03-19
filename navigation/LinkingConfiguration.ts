import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Scoreboard: {
            screens: {
              ScoreboardScreen: 'one',
            },
          },
          Squares: {
            screens: {
              SquaresScreen: 'two',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
