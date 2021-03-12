import React from 'react';
import { fireEvent, render } from 'react-native-testing-library'
import App from '../App.tsx';

describe('Unit Testing', () => {
    it('should display a title of the App', async () => {
        const { getByText, queryByText } = render(<App />);
        let a = queryByText('March Madness');
        expect(a).not.toBeNull();
    });
});