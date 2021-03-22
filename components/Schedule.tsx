import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Text, Divider, ListItem } from 'react-native-elements';
import { SvgUri, Text as SvgText } from 'react-native-svg';

import { useNavigation } from '@react-navigation/native';
import GameService from '../services/gameService';

import data from '../constants/HardData.json';
import { Game, Team } from '../types/Game';
import { Board } from '../types/Board';
import { Schedule } from '../types/Schedule';


export default function GameSummary(props: {schedule: Game[]}){
    const navigation = useNavigation();
    const gameSvc = new GameService();

    let schedule = props.schedule;

    function getIndexForScore(arr: number[], score: string): number{
      const i = parseInt(score[score.length - 1]);
      return arr.findIndex(x => x === i);
    }

    function getWinningUser(boardIndex: number, winningIndex: number, losingIndex: number): string[] {
      let cells = data.boards[boardIndex].cells;
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
            let winners = new Array<string>();
            if (v.game.gameState !== 'pre' && v.game.gameState !== 'forfeit'){
              for (let boardIndex = 0; boardIndex < data.boards.length ; boardIndex++) {                
                if (parseInt(v.game.home.score) > parseInt(v.game.away.score)){
                  winningIndex = getIndexForScore(data.boards[boardIndex].winnerNumbers, v.game.home.score);
                  losingIndex = getIndexForScore(data.boards[boardIndex].loserNumbers, v.game.away.score);
                } else {
                  winningIndex = getIndexForScore(data.boards[boardIndex].winnerNumbers, v.game.away.score);
                  losingIndex = getIndexForScore(data.boards[boardIndex].loserNumbers, v.game.home.score);
                }

                winners.push(getWinningUser(boardIndex, winningIndex, losingIndex)[0]);
              }
            }

            return (
              <>
              <ListItem key={i} testID="gameListItem">
                <ListItem.Content>
                  {/* <ListItem.Title>
                    <View>
                      {/* <Avatar 
                        rounded
                        source={{
                          uri: `https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgl/texas-tech.svg`
                        }}
                      />
                      
                      <Avatar 
                        rounded
                        source={{
                          uri: `https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgl/texas-tech.svg`
                        }}
                      />
                      <SvgUri
                      width="25%"
                      height="25%"                   
                      uri={`https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgl/${v.game.away.names.seo}.svg`}
                        
                      />
                      <Text>{v.game.home.names.char6}</Text>
                      {/* {v.game.away.names.char6} @ {v.game.home.names.char6} 
                    
                    </View>
                  </ListItem.Title> */}
                  <ListItem.Subtitle>
                    <View>
                    <View style={{flexDirection: 'row', paddingBottom: 10}}>
                      <SvgUri
                        width="15%"
                        height="100%"                   
                        uri={`https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgl/${v.game.away.names.seo}.svg`}
                          
                        />
                      <Text>{v.game.away.names.short}</Text>
                      <Text style={{textAlign: 'right'}}> {v.game.away.description}</Text>
                      {v.game.gameState !== 'pre' && <Text style={{textAlign: 'right'}}> {v.game.away.score}</Text>}
                      
                    </View>
                    <View style={{flexDirection: 'row', paddingBottom: 10}}>
                      <SvgUri
                        width="15%"
                        height="100%"                   
                        uri={`https://i.turner.ncaa.com/sites/default/files/images/logos/schools/bgl/${v.game.home.names.seo}.svg`}
                          
                        />
                      <Text>{v.game.home.names.short}</Text>
                      <Text style={{textAlign: 'right'}}> {v.game.home.description}</Text>
                      {v.game.gameState !== 'pre' && <Text style={{textAlign: 'right'}}> {v.game.home.score}</Text>}
                      
                      
                    </View>
                      <View style={{flexDirection: 'row'}}>
                        {v.game.gameState === 'pre' && <Text>{v.game.startTime}</Text>}
                        {v.game.gameState === 'live' && <Text>Live</Text>}
                        {v.game.network.length > 0 && v.game.gameState !== 'final' && <Text> on {v.game.network}</Text>}
                      </View>
                      <View>
                        {v.game.gameState !== 'final' && v.game.gameState !== 'pre' && <Text style={{color: 'green'}}>{v.game.currentPeriod} ({v.game.contestClock})</Text>}
                      </View>
                      {v.game.gameState !== 'pre' && <Text style={{fontSize: 20}}>{v.game.gameState !== 'final' ? "Winning" : "Winners"}</Text>}
                      <View>
                          {v.game.gameState !== 'pre' && 
                            winners.map((winner,i) => {
                              return (
                                <Text key={winner}>{winner} {v.game.gameState === 'final' ? ' x' : ""}</Text>

                              )
                            })
                          }
                      </View>
                    </View>
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
              <Divider  />  
              </>            
            )
          })
        }
      </>
    )
}