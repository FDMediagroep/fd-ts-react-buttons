import React from "react";
import styled from 'styled-components';

export interface Props {
    type?: 'button' | 'submit';
    layout?: 'primary' | 'secondary';
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class Button extends React.PureComponent<Props, any> {
    render() {
        const classes: string[] = [];
        if (this.props.layout) {
            classes.push(this.props.layout);
        }
        if (this.props.className) {
            classes.push(this.props.className);
        }
        return (
            <StyledButton
                onClick={this.props.onClick}
                type={this.props.type ? this.props.type : 'button'}
                className={classes.join(' ')}
            >
                {this.props.children}
            </StyledButton>
        );
    }
}

const StyledButton = styled('button')`
    background-color: orange;
`;
