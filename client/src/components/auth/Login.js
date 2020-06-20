import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";
import TextField from "../common/TextField";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome Developers</h3>
            <p>Join The Developer Paradise</p>
            <Link to="/login" className="orangeBtn">
              Register
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
                <h3 className="register-heading text-white bold">Login</h3>
                <div className="row login-form">
                  <form
                    noValidate
                    onSubmit={this.onSubmit}
                    className="form-width"
                  >
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

                    <input type="submit" className="btn" value="Login" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <div classNameName="login">
      //   <div classNameName="container">
      //     <div className="row">
      //       <div className="col-md-8 m-auto">
      //         <h1 className="display-4 text-center">Log In</h1>
      //         <p className="lead text-center">
      //           Sign in to your DevConnector account
      //         </p>
      //         <form onSubmit={this.onSubmit}>
      //           <TextField
      //             placeholder="Email Address"
      //             name="email"
      //             type="email"
      //             value={this.state.email}
      //             onChange={this.onChange}
      //             className={classnames("form-control form-control-lg", {
      //               "is-invalid": errors.email,
      //             })}
      //             error={errors.email}
      //           />
      //           <TextField
      //             type="password"
      //             placeholder="Password"
      //             name="password"
      //             value={this.state.password}
      //             onChange={this.onChange}
      //             error={errors.password}
      //             className={classnames("form-control form-control-lg", {
      //               "is-invalid": errors.password,
      //             })}
      //           />

      //           <input type="submit" className="btn btn-info btn-block mt-4" />
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
