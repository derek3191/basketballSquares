import React, {useState, useEffect} from 'react';

import { Text, View, StyleSheet, ScrollView } from 'react-native';

import Schedule from '../components/Schedule.tsx';

import GameService from '../services/gameService.ts';

export default function ScoreboardScreen() {
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
        <View>
          <ScrollView>
            {schedule && <Schedule games={schedule} />}
          </ScrollView>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
