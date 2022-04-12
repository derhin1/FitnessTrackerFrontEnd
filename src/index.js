import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { App } from "./components";
import AuthProvider from "./components/AuthProvider";


ReactDom.render(
  <Router>
    <AuthProvider>
    <App />
    </AuthProvider>
  </Router>,

  document.getElementById("app")
);
