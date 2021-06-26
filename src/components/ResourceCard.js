import React from "react";

export default function ResourceCard ({ rsType, type, unit, chief }) {
  return (
    <div className="rsCard">
      <h2>{rsType}</h2>
      <ul>
        <h3>Type: {type}</h3>
        <h3>Unit: {unit} </h3>
        <h3>Chief: {chief}</h3>
      </ul>
    </div>
  );
};

