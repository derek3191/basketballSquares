import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import UserSummary from './components/UserSummary.tsx';
import GameDetail from "./components/GameDetail.tsx";

import GameService from './services/gameService.ts';

export default function App() {
  var gameSvc = new GameService();
  // var message = gameSvc.getGameInfo('5764063');
  
  const [gameDetail, setGameDetail] = useState(null);
  const [date, setDate] = useState(new Date(Date.now()));

  useEffect(() => {
    async function getGameInfo(id){
      return gameSvc.getGameInfo(id);
    }

    if (gameDetail === undefined || gameDetail === null){
      getGameInfo('5764063')
        .then(result => {
        // CacheStore.set(scheduleDate, result, 15);     
        // console.log(result.data); 
        setGameDetail(result.data);
      })
        .catch(err => {
        console.log(err);
        setGameDetail(null);
      });
    }
  }, []);

  return (
    <SafeAreaView>
      <UserSummary style={styles.userSummary} />
      <Text testID="date">{(date.getMonth()+1)}/{date.getDate()}/{date.getFullYear()}</Text>

      {gameDetail && <GameDetail gameInfo={gameDetail} />}
    </SafeAreaView>
  );
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
