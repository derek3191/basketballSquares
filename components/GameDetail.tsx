import React from 'react';
import { StyleSheet as DefaultStyleSheet, View as DefaultView } from 'react-native';
import { Text } from 'react-native-elements';

export default function GameDetail(props){
    return(
        <DefaultView>
            {props.gameInfo !== undefined && 
                <>
                    <Text>{props.gameInfo.championship.bracketRound}</Text>
                    <DefaultView style={{flexDirection: 'row'}}>
                        <DefaultView testID="away">
                            <Text h4 testID="name">{props.gameInfo.away.names.short}</Text>
                            <Text testID="record">{props.gameInfo.away.record}</Text>
                            <Text testID="score">{props.gameInfo.away.score}</Text>
                        </DefaultView>
                        <Text h4 >@</Text>
                        <DefaultView testID="home">
                            <Text h4 testID="name">{props.gameInfo.home.names.short}</Text>
                            <Text testID="record">{props.gameInfo.home.record}</Text>
                            <Text testID="score">{props.gameInfo.home.score}</Text>
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