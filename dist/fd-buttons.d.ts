import React from "react";
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
export default class Button extends React.PureComponent<Props, any> {
    generateTheme: () => Theme;
    render(): JSX.Element;
}
