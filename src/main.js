import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthRoute from './components/AuthRoute';

export class Main extends Component {
    state = {
      isLoggedIn: false,
    }

    render() {
      const { isLoggedIn } = this.state;
      return (
        <Router>
          {isLoggedIn && (
          <nav>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Cotact</Link>
              </li>
            </ul>
          </nav>
          )}
          <main>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/register" component={Register} />
              <AuthRoute path="/home" component={Home} isLoggedIn={isLoggedIn} />
              <AuthRoute path="/about" component={About} isLoggedIn={isLoggedIn} />
              <AuthRoute path="/contact" component={Contact} isLoggedIn={isLoggedIn} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </Router>
      );
    }
}

export default Main;
