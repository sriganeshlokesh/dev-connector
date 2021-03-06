import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  onDelete = (id) => {
    this.props.deleteEducation(id);
  };

  render() {
    const edu = this.props.education.map((edu) => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>{edu.fieldofstudy}</td>
        <td>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
          <Moment format="YYYY/MM/DD">{edu.to}</Moment>
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
        <h4 className="mb-4 text-center bold">Education</h4>
        <table className="table">
          <thead className="table-head">
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Field of Study</th>
              <th>Years</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table-body">{edu}</tbody>
        </table>
      </div>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
