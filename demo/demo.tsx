import React from 'react';
import ReactDOM from 'react-dom';
import Button from "../src/fd-buttons";

function handleClick() {
    alert('clicked');
}

ReactDOM.render(<div>
        <Button layout="primary" onClick={handleClick}>Test 1</Button>
        <Button layout="secondary" onClick={handleClick}>Test 2</Button>
    </div>,
    document.getElementById('root'));
