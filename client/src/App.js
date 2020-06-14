import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import Landing from "../src/components/layout/Landing";
import Register from "../src/components/auth/Register";
import Login from "../src/components/auth/Login";
import { Provider } from "react-redux"; // provides the application with the store which holds the state
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logOutUser } from "./actions/authActions";
import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode the token
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    // Logout
    store.dispatch(logOutUser);
    // TODO: clear current profile
    // Redirect to login
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
