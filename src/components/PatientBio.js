import React from "react";

export default function PatientBio ({ name, age, gender }) {
  //destructure name/age since we know those are the props we are getting from PtBio
  //child prop receiving props from the 
  return (
    <div className="ptBio-card">
      <ul>
        <h2 className="bio"> Name:{name}</h2>
        <h2 className="bio"> Age: {age}</h2>
        <h2 className="bio"> Gender: {gender}</h2>
      </ul>
    </div>
  );
};


