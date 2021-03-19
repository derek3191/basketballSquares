import React from 'react';
import { fireEvent, render } from 'react-native-testing-library'

import Schedule from '../components/Schedule.tsx';

describe('Schedule Specific Tests', () => {
    let expectedGameInfo;
    beforeEach(() => {
        expectedGameInfo = [
            {
                game: {
                    away: {
                        description: '(26-0)',
                        score: 65,
                        names: {
                            char6: "KANSAS",
                            short: "Kansas University"
                        }
                    },
                    home: {
                        description: '(2-24)',
                        score: 25,
                        names: {
                            char6: "MIZZOU",
                            short: "Missouri University"
                        }
                    },
                    bracketRound: "FIRST ROUND",
                    finalMessage: "",
                    url: "/game/234234",
                    startTime: "12:15PM ET"
                }
            },{
                game: {
                    away: {
                        description: '(13-13)',
                        score: 35,
                        names: {
                            char6: "SAINTL",
                            short: "Saint Louis University"
                        }
                    },
                    home: {
                        description: '(20-2)',
                        score: 55,
                        names: {
                            char6: "STANFO",
                            short: "Stanford University"
                        }
                    },
                    bracketRound: "FIRST ROUND",
                    finalMessage: "",
                    url: "/game/532523",
                    startTime: "1:15PM ET"
                }
            }
        ]
    });

    it('displays a game for each item in array', async () => {
        const { getByText, getAllByTestId} = render(<Schedule games={expectedGameInfo}/>)
        let rows = getAllByTestId('gameListItem');
        expect(rows.length).toBe(2);
    });

    it('displays a title in the row', async () => {
        const { getByText } = render(<Schedule games={expectedGameInfo} />);
        const game = expectedGameInfo[0];
        const gameTitle = `${game.game.away.names.char6} @ ${game.game.home.names.char6}`;
        expect(getByText(gameTitle)).toBeTruthy();        
    });
});