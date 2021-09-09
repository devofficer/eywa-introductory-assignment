import React from 'react';
import logo from './logo.svg';
import './App.css';
import markdownToTxt from "markdown-to-txt";
const readme = require('../README.md')
const App = () =>
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                {markdownToTxt(readme)}
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>


export default App;
