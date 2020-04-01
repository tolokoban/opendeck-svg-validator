import Tfw from 'tfw'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

Tfw.Theme.register("default", {
    bg0: "#000",
    bg3: "#666"
})
Tfw.Theme.apply("default");

// Entry point for our app
const root = document.getElementById('root') as HTMLElement;
ReactDOM.render(<App />, root)
