import React from 'react';
import { fireEvent, render } from 'react-native-testing-library'
import App from '../App.tsx';

describe('Unit Testing', () => {
    it('should display a title of the App', async () => {
        const { getByText, queryByText } = render(<App />);
        let title = queryByText('March Madness');
        expect(title).not.toBeNull();
    });

    it('should display the date viewed', async () => {
        const { getByTestId } = render(<App />);
        let dateLabel = getByTestId('date');
        let date = Date.parse(dateLabel.props.children);
        expect(dateLabel.props.children).not.toBeNull();
        expect(date).not.toBeNaN();
    });


});