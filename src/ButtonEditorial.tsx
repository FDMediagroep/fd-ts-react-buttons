import React, { PureComponent } from "react";
import { createGlobalStyle, css } from "styled-components";

export default class ButtonEditorial extends PureComponent<any, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <button {...this.props} className={`fd-button${this.props.className ? ` ${this.props.className}` : ''}`}>{this.props.children}</button>
            </>
        );
    }
}

const styles = css`
.fd-button {
    outline: none; /* Sorry, visually impaired, I tried */
    position: relative;
    min-height: 2rem;
    display: inline-block;
    align-items: center;
    vertical-align: middle;
    font-size: 1rem;
    line-height: 1;
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    padding: 0 1rem;
    border: none;
    text-align: center;
    background-color: #677381;
    &:hover {
        background-color: #2e3843;
    }
    box-shadow: rgba(0, 0, 0, 0.2) 0px -2px 0px 0px inset;
    border-radius: 2px;
    transition: background-color .1s;
    font-family: 'ProximaNovaBold', sans-serif;
    font-weight: normal;
    &.m {
        min-height: 2.5rem;
    }
    &.l {
        font-size: 1.25rem;
        padding: 0 1.5rem;
        min-height: 3.5rem;
    }
    &:active {
        box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2) inset;
    }
}
`;

const GlobalStyle = createGlobalStyle`${styles}`;

export {styles as ButtonEditorialStyles};
