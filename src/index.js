import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.css";
import firebase from "@firebase/app";
import "@firebase/firestore";
import "@firebase/analytics";
import firebaseConfig from "./utils/firebase";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// enable firestore configuration
const db = firebase.firestore();
// firebase.firestore.setLogLevel('debug');
firebase.firestore().settings({ experimentalForceLongPolling: true });

db.collection("tests")
  .get()
  .then((snapshot) => {
    snapshot.forEach((test) => {
      console.log(test.data());
      console.log(test.id);
    });
  })
  .catch((e) => {
    console.error(e);
  });
