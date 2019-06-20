import React, { PureComponent } from "react";
export declare type ButtonTypes = 'default' | 'persoonlijk';
export interface Props {
    buttonStyle: ButtonTypes;
    className?: string;
    followButtonText?: string;
    followLink?: string;
    unFollowButtonText?: string;
    unFollowLink?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    selected?: boolean;
    tag: string;
}
export default class FollowButton extends PureComponent<Props, any> {
    render(): JSX.Element;
}
declare const styles: import("styled-components").FlattenSimpleInterpolation;
export { styles as FollowButtonStyle };
