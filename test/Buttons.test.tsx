import TestRenderer from 'react-test-renderer';
import {ButtonCallToAction, ButtonEditorial} from '../src/Buttons';
import React from 'react';

describe('Button', () => {
    test('renders call-to-actions button correctly', () => {
        let button = TestRenderer.create(<ButtonCallToAction/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<ButtonCallToAction className="m"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<ButtonCallToAction className="l"/>);
        expect(button.toJSON()).toMatchSnapshot();
    });

    test('renders editorial buttons correctly', () => {
        let button = TestRenderer.create(<ButtonEditorial/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<ButtonEditorial className="m"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<ButtonEditorial className="l"/>);
        expect(button.toJSON()).toMatchSnapshot();
    });
});