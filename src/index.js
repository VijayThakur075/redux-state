import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './components/App/App'
import Home from './Home/Home'
import store from './store/index'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <Home />
        {/* <App /> */}
    </Provider>,
    document.getElementById("root"));
