import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./components/App";
import "./styles.css"

ReactDOM.render(
  <Auth0Provider
    domain="dev-dhmee7qf.us.auth0.com"
    clientId="zN6xWRQsiEfB5AZMBfxtYqmZucYwNbzY"
    redirectUri={"http://localhost:3000"}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);