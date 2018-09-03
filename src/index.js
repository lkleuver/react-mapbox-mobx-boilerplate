import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";

import { Provider } from "mobx-react";
import App from "./App";

import Store from "./store/Store";
import UIStore from "./store/UIStore";

const store = new Store();
const uiStore = new UIStore();
ReactDOM.render(
  <Provider store={store} uiStore={uiStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
