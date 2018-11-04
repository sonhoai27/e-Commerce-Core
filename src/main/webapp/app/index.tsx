import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { ThroughProvider } from "react-through";
import initStore from "./reducers/store";
import AppComponent from "./app";

const store = initStore();

const rootEl = document.getElementById("root");

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <div className="wrapper">
          <div className="d-flex">
            <ThroughProvider>
              <Component />
            </ThroughProvider>
          </div>
        </div>
      </Provider>
    </AppContainer>,
    rootEl
  );

render(AppComponent);
