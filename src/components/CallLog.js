import React, {useState}  from "react";
import { patientData } from "../patientData";
import PatientCard from "./PatientCard";

//Call Log is the parent component housing the data. It will also house the Child Cards
const CallLog = () => {
  const [data] = useState(patientData); // patientData is name of array in data. 

  return (
    //map through all the data and for each bit of data (or each patient on the list), give it a PatientCard
    <div className="scene-container-wrapper">
      {data.map((pt, index) => (
        //we are giving the props to the items or patient on the ptCard
        <PatientCard propsGivenByCallLog={pt} key={index} />
      ))}
    </div>
  );
};
export default CallLog;