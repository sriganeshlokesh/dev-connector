import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logOutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logOutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item red">
          <Link className="nav-link" to="/feed">
            <i class="fa fa-envelope-open fa-fw" aria-hidden="true"></i>
            Post Feed
          </Link>
        </li>
        <li className="nav-item red">
          <Link className="nav-link" to="/dashboard">
            <i class="fa fa-home fa-fw"></i>Dashboard
          </Link>
        </li>
        <li className="nav-item red">
          <a href="#" onClick={this.onLogout} className="nav-link">
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a Gravatar Connected to Email"
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item red">
          <Link className="nav-link" to="/register">
            <i class="fa fa-user-plus fa-fw" aria-hidden="true"></i>
            Sign Up
          </Link>
        </li>
        <li className="nav-item red">
          <Link className="nav-link" to="/login">
            <i class="fa fa-user-circle fa-fw" aria-hidden="true"></i>
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm mb-4 navbar-custom text-white">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span>Social</span> Network
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item red">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  <i class="fa fa-github-alt fa-fw" aria-hidden="true"></i>
                  Developers
                </Link>
              </li>
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logOutUser, clearCurrentProfile })(
  Navbar
);
