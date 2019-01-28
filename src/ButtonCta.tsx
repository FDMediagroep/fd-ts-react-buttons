import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export default class ButtonCallToAction extends PureComponent<any, any> {
    render() {
        return (
            <>
                <GlobalStyles/>
                <button {...this.props} className={`fd-button-cta${this.props.className ? ` ${this.props.className}` : ''}`}>{this.props.children}</button>
            </>
        );
    }
}

const GlobalStyles = createGlobalStyle`
.fd-button-cta {
    min-height: 2rem;
    display: inline-flex;
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
    background-color: #ff8529;
    :hover {
        background-color: #DF680E;
    }
    box-shadow: rgba(0, 0, 0, 0.2) 0px -2px 0px 0px inset;
    border: none;
    border-radius: 2px;
    transition: all .1s;
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

export {GlobalStyles as ButtonCallToActionStyles};
