import * as React from 'react';

import { Text, View} from 'react-native';
import GameDetail from '../components/GameDetail';

export default function GameDetailScreen() {
    return (
        <View>
            <GameDetail gameInfo="5774514" />
        </View>
    );
}