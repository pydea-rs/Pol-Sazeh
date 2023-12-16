import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import GlobalState from "./containers/GlobalState";
import App from "./containers/App";
import './index.css';

render(
    <GlobalState>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalState>,
    document.getElementById("root")
);
