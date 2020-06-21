import React, { Component } from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import TextField from "../common/TextField";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome Developers</h3>
            <p>
              Join The Social Network to Interact with other developers and
              broaden your developer comrade
            </p>
            <Link to="/login" className="orangeBtn">
              Login
            </Link>
            <br />
          </div>
          <div className="col-md-9 register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading bold">Register</h3>
                <div className="row register-form">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <TextField
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.name,
                        })}
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.email,
                        })}
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        error={errors.email}
                        info="This site uses Gravatar so if you want a profile image, use
                    a Gravatar email"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password,
                        })}
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        type="password"
                        error={errors.password}
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password2,
                        })}
                        placeholder="Confirm Password"
                        name="password2"
                        value={this.state.password2}
                        type="password"
                        onChange={this.onChange}
                        error={errors.password2}
                      />
                    </div>
                    <input type="submit" className="btn" value="Register" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
