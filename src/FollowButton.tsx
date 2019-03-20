import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export type ButtonTypes = 'default' | 'persoonlijk';

export interface Props {
    buttonStyle: ButtonTypes;
    className?: string;
    followButtonText?: string;
    followLink?: string;
    unFollowButtonText?: string;
    unFollowLink?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    selected?: boolean;
    tag: string;
}

export default class FollowButton extends PureComponent<Props, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <button className={`fd-follow-button${this.props.className ? ` ${this.props.className}` : ''}${this.props.buttonStyle ? ` ${this.props.buttonStyle}` : ''}`} onClick={this.props.onClick} data-tag={this.props.tag} data-selected={this.props.selected} data-addurl={this.props.followLink ? this.props.followLink : '/add-interest'} data-deleteurl={this.props.unFollowLink ? this.props.unFollowLink : '/delete-interest'}>
                    <span className="cross"/> <span className="button-text default-text">{this.props.followButtonText ? this.props.followButtonText : 'Volg'}</span><span className="button-text active-text">{this.props.unFollowButtonText ? this.props.unFollowButtonText : 'Ontvolg'}</span>
                </button>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-follow-button {
    position: relative;
    outline: none;
    border-radius: 2px;
    white-space: nowrap;
    padding: 5px 10px;
    border: 1px solid #49a4a2;
    color: #49a4a2;
    background-color: transparent;
    cursor: pointer;
    transition: background-color .2s;
    font-family: 'ProximaNovaRegular', sans-serif;
    font-size: 14px;

    &:hover {
        background-color: #49a4a2;
        color: #ffeadb;
    }
    .cross {
        &:before {
            content: '+';
            display: block;
            width: 10px;
            height: 10px;
            line-height: 10px;
        }
        display: inline-block;
        transform: rotate(0deg);
        transition: transform .5s;
        transform-origin: center center;
        font-size: 20px;
        position: relative;
        top: 2px;
    }

    .button-text {
        margin-left: 5px;
    }

    .active-text {
        display: none;
    }

    &[data-selected="true"] {
        background-color: #49a4a2;
        color: #ffeadb;
        .cross {
            transform: rotate(45deg);
        }

        .default-text {
            display: none;
        }
        .default-icon,
        .active-text {
            display: inline;
        }
    }

    &.persoonlijk {
        .cross,
        .button-text {
            color: #000000;
        }

        &:hover {
            .cross,
            .button-text {
                color: #ffffff;
            }
        }

        &[data-selected="true"] {
            .button-text, .cross {
                color: #ffffff;
            }
        }
    }
}
`;
export {GlobalStyle as FollowButtonStyle};
