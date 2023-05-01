import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from "./App";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {BrowserRouter} from "react-router-dom";

export function render(url: string, opts: {}) {
    const html = renderToPipeableStream(
        <Provider store={store}>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </Provider>,
        opts

    )
    return { html }
}
