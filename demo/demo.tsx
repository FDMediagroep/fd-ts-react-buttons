import React from 'react';
import ReactDOM from 'react-dom';
import {ButtonCallToAction, ButtonEditorial, FollowButton} from "../src/Buttons";
import { createGlobalStyle } from 'styled-components';

function handleClick() {
    alert('clicked');
}

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #ffeadb;
    }
    div {
        display: inline-block;
        width: 100%;
        margin-bottom: 1rem;
    }
`;

ReactDOM.render(<>
        <GlobalStyles/>

        <div><ButtonCallToAction onClick={handleClick}>.fd-button-cta</ButtonCallToAction></div>
        <div><ButtonCallToAction onClick={handleClick} className="m">.fd-button-cta.m</ButtonCallToAction></div>
        <div><ButtonCallToAction onClick={handleClick} className="l">.fd-button-cta.l</ButtonCallToAction></div>

        <div><ButtonEditorial onClick={handleClick}>.fd-button</ButtonEditorial></div>
        <div><ButtonEditorial onClick={handleClick} className="m">.fd-button.m</ButtonEditorial></div>
        <div><ButtonEditorial onClick={handleClick} className="l">.fd-button.l</ButtonEditorial></div>

        <div><FollowButton onClick={handleClick} tag="tag1">.fd-follow-button</FollowButton></div>
        <div><FollowButton onClick={handleClick} selected={true} tag="tag2">.fd-follow-button</FollowButton></div>
        <div><FollowButton className="persoonlijk" onClick={handleClick} tag="tag3">.fd-follow-button.persoonlijk</FollowButton></div>
        <div><FollowButton className="persoonlijk" onClick={handleClick} selected={true} tag="tag3">.fd-follow-button.persoonlijk</FollowButton></div>
    </>,
    document.getElementById('root'));
