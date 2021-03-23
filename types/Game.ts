export interface Team {
  score: string;
  names: {
    char6: string;
    short: string;
    seo: string;
    full: string;
  };
  winner: boolean;
  seed: string;
  description: string;
  rank: string;
  conferences: [
    {
      conferenceName: string;
      conferenceSeo: string;
    },
    {
      conferenceName: string;
      conferenceSeo: string;
    }
  ];
}

export interface Game {
  game: {
    gameID: string;
    away: Team
    finalMessage: string;
    bracketRound: string;
    title: string;
    url: string;
    network: string;
    home: Team
    liveVideoEnabled: boolean;
    startTime: string;
    startTimeEpoch: string;
    bracketId: string;
    gameState: string;
    startDate: string;
    currentPeriod: string;
    videoState: string;
    bracketRegion: string;
    contestClock: string;
    boardWin: [{
      boardId: string
    }]
  };
}
