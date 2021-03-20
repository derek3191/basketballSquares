import React, {useState, useEffect} from 'react';

import { AsyncStorage, Text, View, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Schedule from '../components/Schedule.tsx';

import GameService from '../services/gameService.ts';

export default function ScoreboardScreen() {
  var gameSvc = new GameService();

  const [gameDetail, setGameDetail] = useState(null);
  const [date, setDate] = useState(new Date(Date.now()));
  const [schedule, setSchedule] = useState(null);

  function onChange(event: any, selectedDate: any): void {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setSchedule(null);
  };

  function formatDateString(d: date) : string {
  var year = d.getFullYear();

  var month = (1 + d.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = d.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return year + '/' + month + '/' + day  ;
}

  useEffect(() => {
    async function getGameInfo(id: string): any{
      return gameSvc.getGameInfo(id);
    }

    async function getScheduleForDate(d: date): any {
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
          <View>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
          </View>
          <ScrollView>
            {schedule && <Schedule games={schedule} />}
          </ScrollView>
        </View>
    );
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
