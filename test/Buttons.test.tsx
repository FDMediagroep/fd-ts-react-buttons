import TestRenderer from 'react-test-renderer';
import {ButtonCallToAction, ButtonEditorial, FollowButton} from '../src/Buttons';
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

    test('renders follow buttons correctly', () => {
        let button = TestRenderer.create(<FollowButton onClick={() => {}} tag="tag1"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<FollowButton onClick={() => {}} tag="tag2" selected={true} followLink="https://fd.nl" unFollowLink="https://bnr.nl"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<FollowButton onClick={() => {}} tag="tag3" followButtonText="Follow tha leada leada"/>);
        expect(button.toJSON()).toMatchSnapshot();
        button = TestRenderer.create(<FollowButton onClick={() => {}} tag="tag4" selected={true} unfollowButtonText="You can go your own way!"/>);
        expect(button.toJSON()).toMatchSnapshot();
    });
});