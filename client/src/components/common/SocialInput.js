import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SocialInput = ({
  name,
  placeholder,
  value,
  error,
  onChange,
  icon,
  type,
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon}></i>
        </span>
      </div>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        type={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SocialInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
};

SocialInput.defaultProps = {
  type: "text",
};

export default SocialInput;
