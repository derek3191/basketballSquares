import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Schedule from '../components/schedule.tsx';

export default function ScoreboardScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>scores coming soon...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
