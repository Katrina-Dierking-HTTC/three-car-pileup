import React from "react";
import ResourceCard from "./ResourceCard";

export default function ResourceList({ resources }) {
  return (
    <>
      <h2>Resources: </h2>
      {resources.map((resource, index) => (
        <ResourceCard
          key={index}
          rsType={resource.rsType}
          type={resource.type}
          unit={resource.unit}
          chief={resource.chief}
        />
      ))}
    </>
  );
};

