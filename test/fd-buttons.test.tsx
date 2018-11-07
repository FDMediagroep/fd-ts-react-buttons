import TestRenderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import Button from '../src/fd-buttons';
import React from 'react';

describe('Button', () => {
    test('renders correctly', () => {
        let button = TestRenderer.create(<Button/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<Button type="submit"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<Button type="button" className="test1"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<Button type="submit" className="test2"/>);
        expect(button.toJSON()).toMatchSnapshot();
    });

    test('renders primary correctly', () => {
        let button = TestRenderer.create(<Button type="button" layout="primary"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<Button type="submit" layout="primary"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<Button type="button" layout="primary" className="test1"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<Button type="submit" layout="primary" className="test2"/>);
        expect(button.toJSON()).toMatchSnapshot();
    });

    test('renders secondary correctly', () => {
        let button = TestRenderer.create(<Button type="button" layout="secondary"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<Button type="submit" layout="secondary"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<Button type="button" layout="secondary" className="test1"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<Button type="submit" layout="secondary" className="test2"/>);
        expect(button.toJSON()).toMatchSnapshot();
    });

});