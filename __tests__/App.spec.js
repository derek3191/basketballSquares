import React from 'react';
import { fireEvent, render } from 'react-native-testing-library'
import App from '../App.tsx';

describe('Unit Testing', () => {
    it('should display the date viewed', async () => {
        const { getByTestId } = render(<App />);
        let dateLabel = getByTestId('date');
        let date = Date.parse(dateLabel.props.children);
        expect(dateLabel.props.children).not.toBeNull();
        expect(date).not.toBeNaN();
    });


});