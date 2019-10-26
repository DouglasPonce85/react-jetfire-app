import React from 'react';
import { render } from 'react-dom';

function Hi() {
    // debugger; Enable this line in order to view the original source maps.
    return <p>Hi</p>;
}

render(<Hi />, document.getElementById('app'));
