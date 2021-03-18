import React from 'react';
import { fireEvent, render } from 'react-native-testing-library'
import UserSummary from '../components/UserSummary.tsx';

describe('UserSummary Specific Tests', () => {
    it('should display my winning games', async () => {
        const { getByTestId } = render(<UserSummary />);
        let winningGamesLabel = getByTestId('gamesWon');
        expect(winningGamesLabel.props.children).not.toBeNull();
    });
})