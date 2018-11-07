import React from "react";
export interface Theme {
    color?: string;
    backgroundColor?: string;
    fontFamily?: string;
    fontSize?: string;
    lineHeight?: string;
    cursor?: string;
    borderRadius?: string;
}
export interface Props {
    type?: 'button' | 'submit';
    layout?: 'default' | 'primary' | 'secondary';
    children?: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    defaultTheme?: Theme;
    primaryTheme?: Theme;
    secondaryTheme?: Theme;
    borderRadius?: number;
}
export default class Button extends React.PureComponent<Props, any> {
    generateTheme: () => Theme;
    render(): JSX.Element;
}
