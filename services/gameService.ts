const axios = require('axios');

export default class GameService {
    constructor(){
        this.state = {
            baseurl: 'https://data.ncaa.com/casablanca/'
        };
    }

    ping(){
        return 'received';
    }

    async getGameInfo(gameId){
        try {
            return await axios.get(`${this.state.baseurl}game/${gameId}/gameInfo.json`)
            // return await axios.get(`https://data.ncaa.com/casablanca/game/${gameId}/gameInfo.json`)
        } catch (error) {
            if (error.response.status === 500){
                return error.response;
            }
            return error.response;
        }
    }

    async getScheduleForDate(date){
        try {
            // https://data.ncaa.com/casablanca/scoreboard/basketball-men/d1/2021/03/19/scoreboard.json
            // return await axios.get(`${this.state.baseurl}scoreboard/basketball-men/d1/2021/03/19/scoreboard.json`)
            return await axios.get(`${this.state.baseurl}scoreboard/basketball-men/d1/${date}/scoreboard.json`)
        } catch (error) {
            if (error.response.status === 500){
                return error.response;
            }
            return error.response;
        }
    }
}