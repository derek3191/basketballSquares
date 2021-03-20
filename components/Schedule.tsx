import React from 'react';
import { Button, StyleSheet as DefaultStyleSheet, View as DefaultView } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import GameService from '../services/gameService';

import data from '../constants/HardData.json';

// import SquaresScreen from '../screens/SquaresScreen';
// import LinkingConfiguration from '../navigation/LinkingConfiguration';


export default function GameSummary(props: Props){
    const navigation = useNavigation();
    const gameSvc = new GameService();

    let schedule = props.games;

    function getIndexForScore(arr: [number], score: string): number{
      const i = parseInt(score[score.length - 1]);
      return arr.findIndex(x => x === i);
    }

    return(
        <>
        {schedule && schedule.length > 0 &&
        schedule.map((v, i) => {

          let away: any = v.game.away;
          let home: any = v.game.home;
          let awayScoreFormatted: string = away.score.length > 0 ? v.game.away.score : "-";
          let homeScoreFormatted: string = home.score.length > 0 ? v.game.home.score : "-";

          let winningIndex: number = null, losingIndex: number = null;
          if (v.game.gameState !== "pre"){
            if(parseInt(home.score) > parseInt(away.score)){
              winningIndex = getIndexForScore(data.winnerNumbers, home.score);
              losingIndex = getIndexForScore(data.loserNumbers, away.score);
            } else {
              winningIndex = getIndexForScore(data.winnerNumbers, away.score);
              losingIndex = getIndexForScore(data.loserNumbers, home.score);
            }
          }

          // let splits = v.game.url.split('/');
          // let gameId = splits[splits.length - 1];
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
                    <DefaultView>
                      <Text>Derek</Text>
                      {winningIndex && losingIndex && <Text>{winningIndex},{losingIndex}</Text>}
                      {/* <Button 
                        onPress={() => {
                          gameSvc.getGameInfo(gameId)
                            .then(result => {
                              navigation.navigate("GameDetail", { gameInfo: result.data })
                            })
                            .catch(err => {
                              console.log(err);
                            })
                      
                        }
                        }
                        title="View"/> */}
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