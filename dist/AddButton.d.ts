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
declare const styles: import("styled-components").FlattenSimpleInterpolation;
export { styles as AddButtonStyle };
