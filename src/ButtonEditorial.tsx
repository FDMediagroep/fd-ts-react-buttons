import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export default class ButtonEditorial extends PureComponent<any, any> {
    render() {
        return (
            <>
                <GlobalStyles/>
                <button {...this.props} className={`fd-button${this.props.className ? ` ${this.props.className}` : ''}`}>{this.props.children}</button>
            </>
        );
    }
}

const GlobalStyles = createGlobalStyle`
.fd-button {
    color: #FFFFFF;
    font-family: ProximaNovaBold;
    font-size: 1rem;
    border: none;
    text-align: center;
    background-color: #677381;
    :hover {
        background-color: #2e3843;
    }
    box-shadow: rgba(0, 0, 0, 0.2) 0px -2px 0px 0px inset;
    border-radius: 3px;
    padding: .5rem 1rem;
    line-height: 1.2;
    cursor: pointer;
    &.m {
        font-size: 18px;
        padding: .75rem 1.5rem;
    }
    &.l {
        font-size: 20px;
        padding: .75rem 2rem;
    }
}
`;

export const ButtonEditorialStyles = GlobalStyles;
