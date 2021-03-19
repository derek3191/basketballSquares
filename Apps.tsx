import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ListItem } from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';


import UserSummary from './components/UserSummary.tsx';
import GameDetail from "./components/GameDetail.tsx";
import Schedule from "./components/Schedule.tsx";
// import Navigation from './navigation';

import GameService from './services/gameService.ts';

export default function App() {
  var gameSvc = new GameService();
  
  const [gameDetail, setGameDetail] = useState(null);
  const [date, setDate] = useState(new Date(Date.now()));
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    async function getGameInfo(id){
      return gameSvc.getGameInfo(id);
    }

    async function getScheduleForDate(d){
      return gameSvc.getScheduleForDate(formatDateString(d));
    }

    if (!gameDetail){
      getGameInfo('5774514')
        .then(result => {
        setGameDetail(result.data);
      })
        .catch(err => {
        console.log(err);
        setGameDetail(null);
      });
    }

    if (!schedule && date){
      getScheduleForDate(date)
        .then(result => {
          setSchedule(result.data.games);
        })
        .catch(err => {
          console.log(err);
          setSchedule(null);
        });
    }
  }, [date]);

  return (
    <SafeAreaView>
      <UserSummary style={styles.userSummary} />
      <Text testID="date">{(date.getMonth()+1)}/{date.getDate()}/{date.getFullYear()}</Text>
      <ScrollView>
        {schedule && <Schedule games={schedule} />}
      </ScrollView>
      
      {/* {gameDetail && <GameDetail gameInfo={gameDetail} />} */}
    </SafeAreaView>
  );
}

  function formatDateString(d) {
    var year = d.getFullYear();

    var month = (1 + d.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = d.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return year + '/' + month + '/' + day  ;
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
  },
  userSummary: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
});
