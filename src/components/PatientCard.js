import React, { useState } from "react";
import PatientBio from "./PatientBio";
import Treatment from "./Treatment";
import PainScalePoints from "./PainScalePoints";
import ResourceList from "./ResourceList";

//PatientCard will house the children components (details on the PtCard) and pass the data as props to the children
export default function PatientCard({ propsGivenByCallLog }){
  //will pass as props
  const [pain, setPain] = useState(propsGivenByCallLog.painScale);

  const incrementPain = () => {
    //will pass as props
    setPain(pain => pain + 1);
  };

  const decrementPain = () => {
    setPain(pain => pain - 1);
  };

  return (
    <div className="pt-card">
      <h2>Patient Info</h2>
      <PatientBio
        name={propsGivenByCallLog.name}
        age={propsGivenByCallLog.age}
        gender={propsGivenByCallLog.gender}
      />
      <Treatment
        complaint={propsGivenByCallLog.complaint}
        treatments={propsGivenByCallLog.treatments}
      />
      <PainScalePoints
        incrementPain={incrementPain}
        decrementPain={decrementPain}
        pain={pain}
      />
      
      <ResourceList resources={propsGivenByCallLog.resources} />
    </div>
  );
};

