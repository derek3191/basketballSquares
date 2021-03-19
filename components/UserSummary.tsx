import React from 'react';
import { View as DefaultView, Text as  DefaultText } from 'react-native';

export default function UserSummary(){
    return(
        <DefaultView>
            <DefaultText style={{textAlign: 'right'}}>Games Won</DefaultText>
            <DefaultText style={{textAlign: 'right'}} testID="gamesWon">-</DefaultText>

        </DefaultView>
    )
}