import React from "react";

const ListRendering = () => {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  return (
    <div style={{  marginTop: "20px" }}>
      <h2>List of Fruits</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRendering;