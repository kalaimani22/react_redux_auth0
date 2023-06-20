import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './lib/configureStore';
import history from "./history";

import Callback from './pages/Callback';



const store = configureStore({ history: history });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/callback" component={Callback} />
            </div>
        </ConnectedRouter>
    </Provider>
);

reportWebVitals();




