import React from 'react';
import { StyleSheet as DefaultStyleSheet, View as DefaultView } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

export default function GameSummary(props){
    let schedule = props.games;
    return(
        <>
        {schedule && schedule.length > 0 &&
        schedule.map((v, i) => {

          let awayScoreFormatted = v.game.away.score.length > 0 ? v.game.away.score : "-";
          let homeScoreFormatted = v.game.home.score.length > 0 ? v.game.home.score : "-";
          return (
            <ListItem key={i} testID="gameListItem">
              <ListItem.Content>
                <ListItem.Title>{v.game.away.names.char6} @ {v.game.home.names.char6}</ListItem.Title>
                <ListItem.Subtitle>
                <DefaultView>
                    <DefaultView style={{flexDirection: 'row'}}>
                        <Text>{v.game.startTime}</Text>
                        <Text> on {v.game.network}</Text>
                    </DefaultView>
                    <DefaultView>
                      <Text>{v.game.currentPeriod}</Text>
                    </DefaultView>
                    <DefaultView style={{flexDirection: 'row'}}>
                        <DefaultView>
                            <Text>{v.game.away.description}</Text>
                            <Text>{awayScoreFormatted}</Text>
                        </DefaultView>
                        <DefaultView style={{textAlign: 'right'}}>
                            <Text>{v.game.home.description}</Text>
                            <Text>{homeScoreFormatted}</Text>
                        </DefaultView>
                    </DefaultView>
                </DefaultView>
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )
        })
      }
        </>
    )
}