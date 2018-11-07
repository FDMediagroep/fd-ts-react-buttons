import React from "react";

export interface Props {
    type?: 'button' | 'submit';
    layout?: 'primary' | 'secondary';
    children?: React.ReactNode;
    className?: string;
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
            <button
                type={this.props.type ? this.props.type : 'button'}
                className={classes.join(' ')}
            >
                {this.props.children}
            </button>
        );
    }
}
