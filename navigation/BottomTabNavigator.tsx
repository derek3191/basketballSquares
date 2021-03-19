import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ScoreboardScreen from '../screens/ScoreboardScreen';
import SquaresScreen from '../screens/SquaresScreen';
import { BottomTabParamList, ScoreboardParamList, SquaresParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Scoreboard"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Scoreboard"
        component={ScoreboardNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Squares"
        component={SquaresNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const ScoreboardStack = createStackNavigator<ScoreboardParamList>();

function ScoreboardNavigator() {
  return (
    <ScoreboardStack.Navigator>
      <ScoreboardStack.Screen
        name="ScoreboardScreen"
        component={ScoreboardScreen}
        options={{ headerTitle: 'ScoreboardScreen Title' }}
      />
    </ScoreboardStack.Navigator>
  );
}

const SquaresStack = createStackNavigator<SquaresParamList>();

function SquaresNavigator() {
  return (
    <SquaresStack.Navigator>
      <SquaresStack.Screen
        name="SquaresScreen"
        component={SquaresScreen}
        options={{ headerTitle: 'SquaresScreen Title' }}
      />
    </SquaresStack.Navigator>
  );
}