import React, { PureComponent } from "react";
export declare type ButtonTypes = 'default' | 'persoonlijk';
export interface Props {
    buttonStyle: ButtonTypes;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default class AddButton extends PureComponent<any, any> {
    render(): JSX.Element;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export { GlobalStyle as AddButtonStyle };
