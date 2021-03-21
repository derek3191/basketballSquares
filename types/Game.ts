export interface Game {
  game: {
    gameID: string;
    away: {
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
    };
    finalMessage: string;
    bracketRound: string;
    title: string;
    url: string;
    network: string;
    home: {
      score: string;
      names: {
        char6: string;
        short: string;
        seo: string;
        full: string;
      };
      winner: true;
      seed: string;
      description: string;
      rank: "";
      conferences: [
        {
          conferenceName: string;
          conferenceSeo: string;
        }
      ];
    };
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
  };
}
