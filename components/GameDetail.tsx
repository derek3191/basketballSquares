import React from 'react';
import { StyleSheet as DefaultStyleSheet, View as DefaultView } from 'react-native';
import { Text } from 'react-native-elements';

import { GameDetail } from '../types/GameDetail';

export default function GameDetail(props: {game: GameDetail}){
    let game = props.game;
    return(
        <DefaultView>
            {game !== undefined && 
                <>
                    <Text>{game.championship.bracketRound}</Text>
                    <DefaultView style={{flexDirection: 'row'}}>
                        <DefaultView testID="away">
                            <Text h4 testID="name">{game.away.names.short}</Text>
                            <Text testID="record">{game.away.record}</Text>
                            <Text testID="score">{game.away.score}</Text>
                        </DefaultView>
                        <Text h4 >@</Text>
                        <DefaultView testID="home">
                            <Text h4 testID="name">{game.home.names.short}</Text>
                            <Text testID="record">{game.home.record}</Text>
                            <Text testID="score">{game.home.score}</Text>
                        </DefaultView>
                    </DefaultView>
                </>
            }
        </DefaultView>
    )
}

const styles = DefaultStyleSheet.create({
  awayTitle: {
      flex: 1
  },
  homeTitle: {
        flex: 1
  },
  at: {
        flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  userSummary: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
});