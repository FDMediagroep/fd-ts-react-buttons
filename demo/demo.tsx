import React from 'react';
import ReactDOM from 'react-dom';
import Button, { Theme } from "../src/fd-buttons";
import styled, { css } from 'styled-components';

function handleClick() {
    alert('clicked');
}

const defaultTheme: Theme = {
    backgroundColor: 'red',
    color: '#fff'
}

const primaryTheme: Theme = {
    backgroundColor: 'black',
    color: '#fff'
}

const secondaryTheme: Theme = {
    backgroundColor: 'lightgrey',
    color: '#fff'
}

const StyledSection = styled('section')`
    padding: 16px;
`;

const GlobalStyles = css`
    body {
        background-color: #ffeadb;
    }
    div {
        margin-bottom: 1rem;
    }
`;

ReactDOM.render(<StyledSection>
        <style>{GlobalStyles}</style>

        <div><Button layout="default" onClick={handleClick}>Default</Button></div>
        <div><Button layout="default" onClick={handleClick} borderRadius={3}>Default border-radius</Button></div>
        <div><Button layout="default" fullWidth={true} onClick={handleClick}>Default full width</Button></div>
        <div><Button layout="default" fullWidth={true} borderRadius={3} onClick={handleClick}>Default full widthborder-radius</Button></div>
        <div><Button layout="primary" onClick={handleClick}>Primary</Button></div>
        <div><Button layout="primary" onClick={handleClick} borderRadius={3}>Primary border-radius</Button></div>
        <div><Button layout="primary" fullWidth={true} onClick={handleClick}>Primary full width</Button></div>
        <div><Button layout="primary" fullWidth={true} borderRadius={3} onClick={handleClick}>Primary full width border-radius</Button></div>
        <div><Button layout="secondary" onClick={handleClick} borderRadius={3}>Secondary border-radius</Button></div>
        <div><Button layout="secondary" onClick={handleClick}>Secondary</Button></div>
        <div><Button layout="secondary" fullWidth={true} onClick={handleClick}>Secondary full width</Button></div>
        <div><Button layout="secondary" fullWidth={true} borderRadius={3} onClick={handleClick}>Secondary full widthborder-radius</Button></div>

        <div><Button defaultTheme={defaultTheme} layout="default" onClick={handleClick}>Default custom theme</Button></div>
        <div><Button defaultTheme={defaultTheme} layout="default" onClick={handleClick} borderRadius={3}>Default custom theme border-radius</Button></div>
        <div><Button defaultTheme={defaultTheme} layout="default" fullWidth={true} onClick={handleClick}>Default custom theme full width</Button></div>
        <div><Button defaultTheme={defaultTheme} layout="default" fullWidth={true} onClick={handleClick} borderRadius={3}>Default custom theme full width border-radius</Button></div>
        <div><Button primaryTheme={primaryTheme} layout="primary" onClick={handleClick}>Primary custom theme</Button></div>
        <div><Button primaryTheme={primaryTheme} layout="primary" onClick={handleClick} borderRadius={3}>Primary custom theme border-radius</Button></div>
        <div><Button primaryTheme={primaryTheme} layout="primary" fullWidth={true} onClick={handleClick}>Primary custom theme full width</Button></div>
        <div><Button primaryTheme={primaryTheme} layout="primary" fullWidth={true} onClick={handleClick} borderRadius={3}>Primary custom theme full width border-radius</Button></div>
        <div><Button secondaryTheme={secondaryTheme} layout="secondary" onClick={handleClick}>Secondary custom theme</Button></div>
        <div><Button secondaryTheme={secondaryTheme} layout="secondary" onClick={handleClick} borderRadius={3}>Secondary custom theme border-radius</Button></div>
        <div><Button secondaryTheme={secondaryTheme} layout="secondary" fullWidth={true} onClick={handleClick}>Secondary custom theme full width</Button></div>
        <div><Button secondaryTheme={secondaryTheme} layout="secondary" fullWidth={true} onClick={handleClick} borderRadius={3}>Secondary custom theme full width border-radius</Button></div>
    </StyledSection>,
    document.getElementById('root'));
