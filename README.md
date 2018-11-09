[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-buttons.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-buttons)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-buttons/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-buttons?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-buttons.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-buttons)
[![Greenkeeper badge](https://badges.greenkeeper.io/FDMediagroep/fd-ts-react-buttons.svg)](https://greenkeeper.io/)

# fd-buttons
FD-themed buttons.

# Installation
* Run `npm i -D @fdmg/fd-buttons`

# Demo
To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.
* [Demo](http://static.fd.nl/react/buttons/demo.html)

# Props
When developing in TypeScript autocompletion and code documentation is shown in IDE's like Visual Studio Code.
```
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
```

# Usage
```
import Button from '@fdmg/fd-buttons';
...
<Button defaultTheme={defaultTheme} layout="default" fullWidth={true} onClick={handleClick} borderRadius={3}>Default custom theme full width border-radius</Button>
```
