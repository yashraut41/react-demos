import React from "react";
import ReactDOM from 'react-dom/client'
const heading = React.createElement('h1', { id: 'heading' }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById('rooot'));
// root.render(heading);

const parent = React.createElement(
    'div', { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        [React.createElement('h1', {}, 'I am H1 tag'), React.createElement('h2', {}, 'I am H2 tag')]));
root.render(parent)
console.log(parent)
