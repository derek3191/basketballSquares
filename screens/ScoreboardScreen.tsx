import React, {useState, useEffect} from 'react';

import { AsyncStorage, Text, View, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Schedule from '../components/Schedule';

import GameService from '../services/gameService';
import { Game } from '../types/Game';

export default function ScoreboardScreen() {
  var gameSvc = new GameService();

  // const [gameDetail, setGameDetail] = useState<any | null>(null);
  const [date, setDate] = useState<Date>(new Date(Date.now()));
  const [schedule, setSchedule] = useState<Game[] | null>(null);

  function onChange(event: any, selectedDate: any): void {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setSchedule(null);
  };

  function formatDateString(d: Date) : string {
  var year = d.getFullYear();

  var month = (1 + d.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = d.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  
  return year + '/' + month + '/' + day  ;
}

  useEffect(() => {
    // const abortController = new AbortController();

    async function getGameInfo(id: string): Promise<any>{
      return gameSvc.getGameInfo(id);
    }

    async function getScheduleForDate(d: Date): Promise<any> {
      return gameSvc.getScheduleForDate(formatDateString(d));
    }

    // if (!gameDetail){
    //   getGameInfo('5774514')
    //     .then((result: any) => {
    //     setGameDetail(result.data);
    //   })
    //     .catch((error: Error) => {
    //     console.log(error);
    //     setGameDetail(null);
    //   });
    // }

    if (!schedule && date){
      getScheduleForDate(date)
        .then((result: any) => {
          setSchedule(result.data.games);
        })
        .catch((error: Error) => {
          console.log(error);
          // setSchedule(null);
        });
    }

    return () => {

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
            {schedule && <Schedule schedule={schedule} />}
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
