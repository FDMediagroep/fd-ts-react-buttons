import React from "react";
export interface Props {
    type?: 'button' | 'submit';
    layout?: 'primary' | 'secondary';
    children?: React.ReactNode;
    className?: string;
}
export default class Button extends React.PureComponent<Props, any> {
    render(): JSX.Element;
}
