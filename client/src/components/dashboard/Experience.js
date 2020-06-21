import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  onDelete = (id) => {
    this.props.deleteExperience(id);
  };

  render() {
    const exp = this.props.experience.map((exp) => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        </td>
        <td>
          <button onClick={this.onDelete} className="delete">
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4 text-center bold">Experience</h4>
        <table className="table spacing">
          <thead className="table-head">
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">{exp}</tbody>
        </table>
      </div>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
