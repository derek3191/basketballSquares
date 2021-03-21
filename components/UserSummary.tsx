import React from 'react';
import { View, Text } from 'react-native';

export default function UserSummary(){
    return(
        <View>
            <Text style={{textAlign: 'right'}}>Games Won</Text>
            <Text style={{textAlign: 'right'}} testID="gamesWon">-</Text>

        </View>
    )
}