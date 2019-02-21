import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export type ButtonTypes = 'default' | 'persoonlijk';

export interface Props {
    buttonStyle: ButtonTypes;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class AddButton extends PureComponent<any, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <button className={`fd-add-button${this.props.className ? ` ${this.props.className}` : ''}${this.props.buttonStyle ? ` ${this.props.buttonStyle}` : ''}`} onClick={this.props.onClick}>{this.props.children}</button>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-add-button {
    outline: none;
    border-radius: 2px;
    white-space: nowrap;
    padding: 5px 10px;
    border: 1px solid #ff7812;
    color: #ffeadb;
    background-color: #ff7812;
    cursor: pointer;
    transition: all .2s;
    font-family: 'ProximaNovaRegular', sans-serif;
    font-size: 14px;

    &.persoonlijk {
        color: #ffffff;
    }
}
`;
export {GlobalStyle as AddButtonStyle};
