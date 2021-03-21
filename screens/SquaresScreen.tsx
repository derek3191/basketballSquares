import * as React from 'react';

import { Text, View, ScrollView, StyleSheet } from 'react-native';

import data from '../constants/HardData.json';

export default function SquaresScreen() {

    function getNameForSquare(winningIndex: number, losingIndex: number): string[] {
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

    return (
        <View>
            <ScrollView horizontal={true}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}></Text></View>
                        {
                            data.winnerNumbers.map((v, i) => {
                                return(
                                    <View key={i}><Text style={styles.col}>{v}</Text></View>
                                )    
                            })
                        }
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,0)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,0)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,0)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,0)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,0)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,0)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,0)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,0)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,0)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,0)[0]}</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[1]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,1)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,1)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,1)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,1)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,1)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,1)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,1)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,1)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,1)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,1)[0]}</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[2]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,2)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,2)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,2)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,2)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,2)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,2)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,2)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,2)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,2)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,2)[0]}</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[3]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,3)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,3)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,3)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,3)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,3)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,3)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,3)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,3)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,3)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,3)[0]}</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[4]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,4)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,4)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,4)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,4)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,4)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,4)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,4)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,4)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,4)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,4)[0]}</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[5]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,5)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,5)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,5)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,5)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,5)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,5)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,5)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,5)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,5)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,5)[0]}</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[6]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,6)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,6)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,6)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,6)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,6)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,6)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,6)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,6)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,6)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,6)[0]}</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[7]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,7)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,7)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,7)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,7)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,7)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,7)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,7)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,7)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,7)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,7)[0]}</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[8]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,8)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,8)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,8)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,8)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,8)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,8)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,8)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,8)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,8)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,8)[0]}</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[9]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(0,9)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(1,9)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(2,9)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(3,9)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(4,9)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(5,9)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(6,9)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(7,9)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(8,9)[0]}</Text></View>
                        <View><Text style={styles.col}>{getNameForSquare(9,9)[0]}</Text></View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    col: {
        padding: 5,
        borderWidth: 1,
        width: 105,
        height: 40,
    },
});