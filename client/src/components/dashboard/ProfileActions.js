import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="row pactions">
      <div className="span-4 text-left">
        <Link to="/edit-profile" className="btn btn-light">
          <i className="fa fa-user-circle  mr-1"></i> Edit Profile
        </Link>
      </div>
      <div className="span-4 text-center">
        <Link to="/add-experience" className="btn btn-light">
          <i className="fa fa-black-tie  mr-1"></i>
          Add Experience
        </Link>
      </div>
      <div className="span-4 text-center">
        <Link to="/add-education" className="btn btn-light">
          <i className="fa fa-graduation-cap mr-1"></i>
          Add Education
        </Link>
      </div>
    </div>
  );
};
export default ProfileActions;
