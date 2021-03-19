import * as React from 'react';

import { Text, View, ScrollView, StyleSheet } from 'react-native';

import data from '../constants/HardData.json';

export default function SquaresScreen() {

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
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[1]}</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[2]}</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[3]}</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[4]}</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[5]}</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[6]}</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[7]}</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[8]}</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View><Text style={styles.col}>{data.loserNumbers[9]}</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
                        <View><Text style={styles.col}>Derek</Text></View>
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
        width: 75,
    },
});