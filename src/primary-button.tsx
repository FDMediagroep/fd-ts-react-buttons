import React from "react";

export interface Props {
    type?: string;
}

export default class PrimaryButton extends React.PureComponent<Props, any> {
    render() {
        return (
            <button
                type={this.props.type}
            ></button>
        );
    }
}
