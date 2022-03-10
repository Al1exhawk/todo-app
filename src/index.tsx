import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.scss';

const rootNode = document.getElementById('app');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    rootNode,
);
