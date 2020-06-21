import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import developer from "../../img/developer.png";
import logo from "../../img/logo.png";
import { url } from "gravatar";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div class="landing">
        <div class="dark-overlay landing-inner text-light">
          <div class="container">
            <div class="row">
              <div class="column">
                <div className="devconnector">
                  <h2 className="heading">
                    <span>Social</span> Network.
                  </h2>
                  <p></p>
                </div>
                <div></div>
                <Link to="/register" class="orange btn-lg">
                  Get Started
                </Link>
              </div>
              <div class="column">
                <img src={developer} alt="developer_logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Landing);
