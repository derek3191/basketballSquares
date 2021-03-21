import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import GameService from '../services/gameService';

import data from '../constants/HardData.json';
import { Game } from '../types/Game';
import { Schedule } from '../types/Schedule';
// import SquaresScreen from '../screens/SquaresScreen';
// import LinkingConfiguration from '../navigation/LinkingConfiguration';


export default function GameSummary(props: {schedule: Game[]}){
    const navigation = useNavigation();
    const gameSvc = new GameService();

    let schedule = props.schedule;

    function getIndexForScore(arr: number[], score: string): number{
      const i = parseInt(score[score.length - 1]);
      return arr.findIndex(x => x === i);
    }

    function getWinningUser(winningIndex: number, losingIndex: number): string[] {
      let cells = data.cells;
      let winner = new Array<string>();
      try {
        // It's late... just trying to get tsc to accept my work
        let winningObj = cells.find(x =>
          x.coordinates.winner === winningIndex && 
          x.coordinates.loser === losingIndex);  
        if (winningObj) {
          winner = winningObj.names;
        }
      } catch (error) {
        return winner 
      }

      return winner;
    }

    return(
      <>
        {schedule && schedule.length > 0 &&
          schedule.map((v, i) => {
            
            let winningIndex = 0, losingIndex = 0;
            let winner = "";
            if (v.game.gameState !== 'pre' && v.game.gameState !== 'forfeit'){
              if (parseInt(v.game.home.score) > parseInt(v.game.away.score)){
                winningIndex = getIndexForScore(data.winnerNumbers, v.game.home.score);
                losingIndex = getIndexForScore(data.loserNumbers, v.game.away.score);
              } else {
                winningIndex = getIndexForScore(data.winnerNumbers, v.game.away.score);
                losingIndex = getIndexForScore(data.loserNumbers, v.game.home.score);
              }

              winner = getWinningUser(winningIndex, losingIndex)[0];
            }

            return (
              <ListItem key={i} testID="gameListItem">
                <ListItem.Content>
                  <ListItem.Title>{v.game.away.names.char6} @ {v.game.home.names.char6}</ListItem.Title>
                  <ListItem.Subtitle>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <View>
                          <Text>{v.game.away.description}</Text>
                          {v.game.gameState !== 'pre' && <Text>{v.game.away.score}</Text>}
                        </View>
                        <View>
                          <Text style={{textAlign: 'right'}}>{v.game.home.description}</Text>
                          {v.game.gameState !== 'pre' && <Text style={{textAlign: 'right'}}>{v.game.home.score}</Text>}
                        </View>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        {v.game.gameState === 'pre' && <Text>{v.game.startTime}</Text>}
                        {v.game.network.length > 0 && v.game.gameState !== 'final' && <Text> on {v.game.network}</Text>}
                      </View>
                      <View>
                        {v.game.gameState !== 'final' && v.game.gameState !== 'pre' && <Text>{v.game.currentPeriod} ({v.game.contestClock})</Text>}
                      </View>
                      <View>
                          {v.game.gameState !== 'pre' && <Text>{winner} {v.game.gameState === 'final' ? ' x' : ""}</Text>}
                      </View>
                    </View>
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>              
            )
          })
        }
      </>
    )
}