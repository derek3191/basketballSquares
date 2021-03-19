import React from 'react';
import { fireEvent, render } from 'react-native-testing-library';
import GameSummary from '../components/GameSummary.tsx';


describe('GameSummary specific tets', () => {
    let expectedGameInfo;
    beforeEach(() => {
        expectedGameInfo = {
            away: {
                description: '(26-0)',
                score: 65,
                names: {
                    short: "Kansas University"
                }
            },
            home: {
                description: '(2-24)',
                score: 25,
                names: {
                    short: "Missouri University"
                }
            },
            bracketRound: "FIRST ROUND",
            finalMessage: "",
            url: "/game/234234",
            startTime: "12:15PM ET"
            
        }
    });

    it('displays a game summary for each game', async () => {
        const { getByText, getByTestId} = render(<GameSummary gameInfo={expectedGameInfo}/>)
        expect(getByText('Kansas University')).toBeTruthy();
        expect(getByText('Missouri University')).toBeTruthy();
    })
})