import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/isEmpty";
import Helmet from "react-helmet";
import "../../Card.css";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div class="courses-container">
        <div class="course">
          <div class="course-preview">
            <img
              src={profile.user.avatar}
              alt=""
              className="rounded-circle img-circle"
            />
            <h3>{profile.user.name}</h3>
            <div>
              <Link to={`/profile/${profile.handle}`} className="btnProfile">
                View Profile
              </Link>
            </div>
          </div>
          <div class="course-info">
            <div class="courses-container">
              <div className="container">
                <h3>
                  {" "}
                  {isEmpty(profile.location) ? null : (
                    <span>{profile.location}</span>
                  )}
                </h3>
                <h4>
                  {profile.status}{" "}
                  {isEmpty(profile.company) ? null : (
                    <span>at {profile.company}</span>
                  )}
                </h4>
              </div>

              <div className="transparent">
                {profile.skills.slice(0, 5).map((skill, index) => (
                  <button key={index} className="red-button">
                    <i className="fa fa-check pr-1" />
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      // <div className="card card-body mb-3 card-profile">
      //   <div className="row">
      //     <div className="col-2">
      //       <img src={profile.user.avatar} alt="" className="rounded-circle" />
      //     </div>
      //     <div className="col-lg-6 col-md-4 col-8">
      //       <h3>{profile.user.name}</h3>
      //       <p>
      //         {profile.status}{" "}
      //         {isEmpty(profile.company) ? null : (
      //           <span>at {profile.company}</span>
      //         )}
      //       </p>
      //       <p>
      //         {isEmpty(profile.location) ? null : (
      //           <span>{profile.location}</span>
      //         )}
      //       </p>
      //       <Link to={`/profile/${profile.handle}`} className="btn btn-info">
      //         View Profile
      //       </Link>
      //     </div>
      //     <div className="col-md-4 d-none d-md-block">
      //       <h4>Skill Set</h4>
      //       <ul className="list-group">
      //         {profile.skills.slice(0, 5).map((skill, index) => (
      //           <li key={index} className="list-group-item">
      //             <i className="fa fa-check pr-1" />
      //             {skill}
      //           </li>
      //         ))}
      //       </ul>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
