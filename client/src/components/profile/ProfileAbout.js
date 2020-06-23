import React, { Component } from "react";
import isEmpty from "../../validation/isEmpty";
import PropTypes from "prop-types";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(" ")[0];

    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <div key={index} className="p-3 red-button-skills">
        <i className="fa fa-check" /> {skill}
      </div>
    ));
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body mb-3">
            <h2 className="text-center ">{firstName}'s Bio</h2>
            <p className="lead text-center">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </p>
            <hr />
            <h3 className="text-center">Skills</h3>
            <div className="skill-row">
              <div className="d-flex flex-wrap justify-content-center ml-auto">
                {skills}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
