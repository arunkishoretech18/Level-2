import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ name, age, city }) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>City: {city}</h3>
    </div>
  );
};

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default UserInfo;