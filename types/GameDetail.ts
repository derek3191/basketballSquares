export interface GameDetail {
  "liveVideos": [{
    "thumbnail": string,
    "streamId": string,
    "showOnLiveSchedule": string,
    "liveVideoEnabled": boolean,
    "videoId": string,
    "title": string,
    "url": string,
    "videoState": string
  }],
  "venue": {
    "city": string,
    "name": string,
    "state": string
  },
  "inputMD5Sum": string,
  "away": {
    "score": number,
    "names": {
      "6Char": string,
      "short": string,
      "seo": string,
      "full": string
    },
    "color": string,
    "seed": string,
    "record": string,
    "rank": string
  },
  "championship": {
    "division": string,
    "year": string,
    "bracketRound": string,
    "champLinks": any[],
    "championshipId": string,
    "bracketId": string,
    "title": string,
    "sport": string,
    "bracketRegion": string
  },
  "tabs": {
    "preview": false,
    "boxscore": false,
    "recap": false,
    "scoringSummary": false,
    "pbp": false,
    "teamStats": false
  },
  "id": string,
  "gameLinks": any[],
  "linescores": any[],
  "home": {
    "score": number,
    "names": {
      "6Char": string,
      "short": string,
      "seo": string,
      "full": string
    },
    "color": string,
    "seed": string,
    "record": string,
    "rank": string
  },
  "status": {
    "winner": string,
    "finalMessage": string,
    "startTime": string,
    "startTimeEpoch": string,
    "clock": string,
    "gameState": string,
    "updatedTimestamp": string,
    "currentPeriod": string,
    "network": string
  }
}