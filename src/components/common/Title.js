import React from "react";
import PropTypes from "prop-types";

const Title = ({title, subtitle}) => (
    <div className="container-fluid text-center py-5">
      <h1 className="display-4">{title}</h1>
      <p className="lead">{subtitle}</p>
    </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default Title;
