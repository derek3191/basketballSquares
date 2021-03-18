import React from 'react';
import { fireEvent, render } from 'react-native-testing-library'
import GameDetail from '../components/GameDetail.tsx';

describe('GameDetail Specific Tests', () => {
    it('should display two teams', async () => {
        const { getByTestId } = render(<GameDetail />);
        let awayView = getByTestId('away');
        expect(winningGamesLabel.props.children).not.toBeNull();
    });
})