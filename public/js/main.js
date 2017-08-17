import React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from 'react-router';
import Home from "./container/home"
import {createStore, applyMiddleware} from 'redux';
import reducer from "./reducer/index"


const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
        </Router>
    </Provider>, document.getElementById('app'));


