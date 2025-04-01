import React from "react";

const UserInfo = ({ name, age, city }) => {
  return (
    <div className="hr">
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>City: {city}</h1>
    
    </div>
  );
}

export default UserInfo;


