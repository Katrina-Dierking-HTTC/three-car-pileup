import React from "react";

export default function Treatment ({ complaint, treatments }) {
  console.log({ complaint, treatments });

  //instead of writing it the say we did on line 3, we could have done it this way>

  //const Treatment = (props) => {
  // const { complaint, treatments } = props;
  // console.log(props);

  return (
    <div className="treatment">
      <h2> Complaints: </h2>
      <ul>
        {complaint.map((c, index) => {
          return <h3 key={index}>{c}</h3>;
        })}
      </ul>

      <h2> Treatments: </h2>

      {treatments.map((treatment, index) => (
        <h3 key={index}>
          Type: {treatment.type}, <br />
          Amount: {treatment.amount}, <br />
          Changes: {treatment.changes}
        </h3>
      ))}
    </div>
  );
};
