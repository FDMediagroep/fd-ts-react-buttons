import TestRenderer from 'react-test-renderer';
import PrimaryButton from '../src/primary-button';
import React from 'react';

describe('Button', () => {
    test('renders correctly', () => {
        const button = TestRenderer.create(<PrimaryButton/>);
        expect(button.toJSON()).toMatchSnapshot();
    });
});