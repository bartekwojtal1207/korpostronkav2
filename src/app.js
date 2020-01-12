import React from 'react';
import ReactDOM from 'react-dom';

import App from "./containers/mainpage";

if (window.innerWidth >= 960) {
    import('./style.css');
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);