import React from "react";
import PropTypes from "prop-types";
// import Button from 'material-ui/Button'
import { Link } from "react-router-dom";

const LinkBtn = ({ to, label, onClick }) => {
  return (
    <Link to={to} className="nav__link" onClick={onClick}>
      {label}
    </Link>
  );
};

LinkBtn.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LinkBtn;
