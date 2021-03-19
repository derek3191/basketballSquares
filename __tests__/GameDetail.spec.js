import React from 'react';
import { fireEvent, render } from 'react-native-testing-library'
import GameDetail from '../components/GameDetail.tsx';

describe('GameDetail Specific Tests', () => {
    it('should display two teams', async () => {
        const expectedGameInfo = {
            away: {
                record: '(26-0)',
                score: 65,
                names: {
                    short: "Kansas University"
                }
            },
            home: {
                record: '(2-24)',
                score: 25,
                names: {
                    short: "Missouri University"
                }
            },
            championship: {
                bracketRound: "FIRST ROUND"
            }
        }
        const { getByText, getByTestId } = render(<GameDetail gameInfo={expectedGameInfo} />);
        let awayView = getByTestId('away');
        expect(awayView.props.children).toHaveLength(3);
        expect(getByText('Kansas University')).toBeTruthy();
        expect(getByText('Missouri University')).toBeTruthy();
    });
})