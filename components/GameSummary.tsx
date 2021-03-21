import React from 'react';
import { StyleSheet as DefaultStyleSheet, View as DefaultView } from 'react-native';
import { Text, ListItem } from 'react-native-elements';

interface Game{
    id: number
}
export default function GameSummary(game: Game){
    return(
        <DefaultView>
            <DefaultView style={{flexDirection: 'row'}}>
                <Text>idk</Text>
            </DefaultView>
        </DefaultView>
    )
}