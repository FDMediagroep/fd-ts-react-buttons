import React from "react";
export interface Props {
    type?: 'button' | 'submit';
    layout?: 'primary' | 'secondary';
    children?: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default class Button extends React.PureComponent<Props, any> {
    render(): JSX.Element;
}
