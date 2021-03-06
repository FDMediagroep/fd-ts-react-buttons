> :exclamation: **DEPRECATED** :exclamation: : Superseded by @fdmg/design-system. See: https://github.com/FDMediagroep/fd-design-system

[![Build Status](https://travis-ci.org/FDMediagroep/fd-ts-react-buttons.svg?branch=master)](https://travis-ci.org/FDMediagroep/fd-ts-react-buttons)
[![Coverage Status](https://coveralls.io/repos/github/FDMediagroep/fd-ts-react-buttons/badge.svg?branch=master)](https://coveralls.io/github/FDMediagroep/fd-ts-react-buttons?branch=master)
[![npm version](https://badge.fury.io/js/%40fdmg%2Ffd-buttons.svg)](https://badge.fury.io/js/%40fdmg%2Ffd-buttons)

# fd-buttons

FD-themed buttons.

# Installation

-   Run `npm i -D @fdmg/fd-buttons`

# Demo

To run the demo, check-out this repository and run `npm run build-demo`.
After the build succeeded you can open `dist/demo.html` with your webbrowser.

-   [Demo](http://static.fd.nl/react/buttons/demo.html)

# Usage

```
import Button from '@fdmg/fd-buttons';
...
<ButtonCallToAction onClick={handleClick}>.fd-button-cta</ButtonCallToAction>
<ButtonCallToAction onClick={handleClick} className="m">Medium-sized .fd-button-cta.m</ButtonCallToAction>
<ButtonCallToAction onClick={handleClick} className="l">Large-sized .fd-button-cta.l</ButtonCallToAction>

<ButtonEditorial onClick={handleClick}>.fd-button</ButtonEditorial>
<ButtonEditorial onClick={handleClick} className="m">Medium-sized .fd-button.m</ButtonEditorial>
<ButtonEditorial onClick={handleClick} className="l">Large-sized .fd-button.l</ButtonEditorial>
```
