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

# Usage
```
import Button from '@fdmg/fd-buttons';
...
<Button onClick={handleClick}>Default button</Button>
<Button onClick={handleClick} className="m">Medium-sized button</Button>
<Button onClick={handleClick} className="l">Large-sized button</Button>
```
