import React, {useState, useEffect} from 'react';

import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';

import data from '../constants/HardData.json';
import { Board, User } from '../types/Board';


export default function SquaresScreen() {
    const [board, setBoard] = useState<Board | undefined | null>(null);
    const [buttonIndex, setButtonIndex] = useState<number>(0);
    const buttons = ['Board 1', 'Board 2'];
    
    function getNameForSquare(winningIndex: number, losingIndex: number): string[] {
    let winner = new Array<string>();
      if (board) {
        let cells = board.cells;
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
        return winner;
    }

    function getBoard(boardId: string = 'Board 1' ) : Board | undefined {
        let board = data.boards.find(x => x.boardId === boardId);
        return board;
    }

    function getLeaderboard(board: Board) : string[] {
        let rank = new Array<string>();
        let user: string;

        // rank = board.cells.map(cell => {
        board.cells.forEach(cell => {
            rank.push(...cell.names);
        });

        rank = rank.filter((v, i, a) => a.indexOf(v) === i)
        rank.sort();
        return rank;
    }

    useEffect(() => {
        if (!board){
            setBoard(getBoard());
        } else if (board.boardId !== buttons[buttonIndex]) {
            setBoard(getBoard(buttons[buttonIndex]));
        }


    }, [buttonIndex]);

    
    function handleClick(selectedIndex: number){
        setButtonIndex(selectedIndex);
    }
    return (
        <ScrollView>
            <ButtonGroup 
            onPress={setButtonIndex}
            selectedIndex={buttonIndex}
            buttons={buttons}
            />
            { board && 
            <ScrollView horizontal={true}>
                <View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}></Text></View>
                        {
                            board.winnerNumbers.map((v, i) => {
                                return(
                                    <View key={i}><Text style={styles.col}>{v}</Text></View>
                                )    
                            })
                        }
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{board.loserNumbers[0]}</Text></View>
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
                        <View><Text style={styles.col}>{board.loserNumbers[1]}</Text></View>
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
                        <View><Text style={styles.col}>{board.loserNumbers[2]}</Text></View>
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
                        <View><Text style={styles.col}>{board.loserNumbers[3]}</Text></View>
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
                        <View><Text style={styles.col}>{board.loserNumbers[4]}</Text></View>
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
                        <View><Text style={styles.col}>{board.loserNumbers[5]}</Text></View>
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
                        <View><Text style={styles.col}>{board.loserNumbers[6]}</Text></View>
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
                        <View><Text style={styles.col}>{board.loserNumbers[7]}</Text></View>
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
                        <View><Text style={styles.col}>{board.loserNumbers[8]}</Text></View>
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
                        <View><Text style={styles.col}>{board.loserNumbers[9]}</Text></View>
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
            }
            {
                board &&     
                getLeaderboard(board).map((v, i) => {
                    return (
                        <Text key={`${v}_${i}`}>{v}</Text>
                    )
                })
            }
        </ScrollView>
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