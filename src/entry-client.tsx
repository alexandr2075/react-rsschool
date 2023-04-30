import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {store} from "./app/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from "./App";

ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
