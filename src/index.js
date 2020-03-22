import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import store from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { fetchAuthors, fetchBooks } from "./redux/actions";

store.dispatch(fetchAuthors());
store.dispatch(fetchBooks());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
