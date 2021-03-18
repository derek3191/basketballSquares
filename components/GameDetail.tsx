import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

export default function GameDetail(props){
    return(
        <View>
            {props.gameInfo !== undefined && 
                <>
                    <View style={{flexDirection: 'row'}}>
                        <View testID="away">
                            <Text h4 testID="name">{props.gameInfo.away.names.full}</Text>
                            <Text testID="record">{props.gameInfo.away.record}</Text>
                            <Text testID="score">{props.gameInfo.away.score}</Text>
                        </View>
                        <Text h4 >@</Text>
                        <View testID="home">
                            <Text h4 testID="name">{props.gameInfo.home.names.full}</Text>
                            <Text testID="record">{props.gameInfo.home.record}</Text>
                            <Text testID="score">{props.gameInfo.home.score}</Text>
                        </View>
                    </View>
                </>
            }
        </View>
    )
}

const styles = StyleSheet.create({
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