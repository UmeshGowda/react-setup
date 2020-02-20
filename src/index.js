import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import storeFactory from './app/store/store';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Provider store={storeFactory}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
