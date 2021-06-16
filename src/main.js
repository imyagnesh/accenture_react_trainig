import React, { Component } from "react";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthRoute from "./components/AuthRoute";
import { checkLoggedIn, clearToken } from "./utils";
import LocaleProvider from "./contaxt/localeContext";

const customHistory = createBrowserHistory();

export class Main extends Component {
  render() {
    return (
      <Router history={customHistory}>
        {checkLoggedIn() && (
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Cotact</Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    clearToken();
                    customHistory.push("/");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        )}
        <main>
          <LocaleProvider>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/register" component={Register} />
              <AuthRoute path="/home" component={Home} />
              <AuthRoute path="/about" component={About} />
              <AuthRoute path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </LocaleProvider>
        </main>
      </Router>
    );
  }
}

export default Main;
