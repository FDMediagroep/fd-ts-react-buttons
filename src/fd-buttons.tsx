import React from "react";
import styled, { ThemeProvider } from 'styled-components';

export interface Theme {
    /**
     * Button text color.
     */
    color?: string;
    /**
     * Button background color.
     */
    backgroundColor?: string;
    /**
     * Button font family.
     */
    fontFamily?: string;
    /**
     * Button font size.
     */
    fontSize?: string;
    /**
     * Button line-height.
     */
    lineHeight?: string;
    /**
     * Button cursor. Default: pointer.
     */
    cursor?: string;
    /**
     * Button border-radius.
     */
    borderRadius?: string;
}

export interface Props {
    /**
     * Button type.
     */
    type?: 'button' | 'submit';
    /**
     * Button layout.
     */
    layout?: 'default' | 'primary' | 'secondary';
    children?: React.ReactNode;
    /**
     * Button class name.
     */
    className?: string;
    /**
     * Button as full width.
     */
    fullWidth?: boolean;
    /**
     * Button click event hook.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Button default theme override.
     */
    defaultTheme?: Theme;
    /**
     * Button primary theme override.
     */
    primaryTheme?: Theme;
    /**
     * Button secondary theme override.
     */
    secondaryTheme?: Theme;
    /**
     * Button border-radius.
     */
    borderRadius?: number;
}

const defaultTheme: Theme = {
    backgroundColor: '#49a4a2',
    borderRadius: 'unset',
    color: '#ffeadb',
    cursor: 'pointer',
    fontFamily: 'ProximaNovaBold,sans-serif',
    fontSize: '1rem',
    lineHeight: '1.2'
};

const primaryTheme: Theme = {
    backgroundColor: '#df8437'
};

const secondaryTheme: Theme = {
    backgroundColor: '#677381'
};

export default class Button extends React.PureComponent<Props, any> {

    generateTheme = (): Theme => {
        let generatedTheme = {...defaultTheme};
        if (this.props.layout) {
            switch (this.props.layout) {
                case "primary":
                    generatedTheme = {...generatedTheme, ...primaryTheme};
                    if (this.props.primaryTheme) { generatedTheme = {...generatedTheme, ...this.props.primaryTheme}; }
                    break;
                case "secondary":
                    generatedTheme = {...generatedTheme, ...secondaryTheme};
                    if (this.props.secondaryTheme) { generatedTheme = {...generatedTheme, ...this.props.secondaryTheme}; }
                    break;
                case "default":
                default:
                    if (this.props.defaultTheme) { generatedTheme = {...generatedTheme, ...this.props.defaultTheme}; }
            }
        }
        return generatedTheme;
    }

    render() {
        const classes: string[] = [];
        const selectedTheme = this.generateTheme();
        if (this.props.borderRadius) {
            selectedTheme.borderRadius = `${this.props.borderRadius}`;
        }
        if (this.props.className) {
            classes.push(this.props.className);
        }
        if (this.props.fullWidth) {
            classes.push('full-width');
        }
        return (
            <ThemeProvider theme={selectedTheme}>
                <StyledButton
                    onClick={this.props.onClick}
                    type={this.props.type ? this.props.type : 'button'}
                    className={classes.join(' ')}
                >
                    {this.props.children}
                </StyledButton>
            </ThemeProvider>
        );
    }
}

const StyledButton = styled('button')`
    padding: .5rem 1.5rem;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 -2px 0 0 rgba(0, 0, 0, 0.2) inset;
    line-height: ${(props) => props.theme.lineHeight};
    font-size: ${(props) => props.theme.fontSize};
    cursor: ${(props) => props.theme.cursor};

    &.full-width {
        width: 100%;
    }
`;
