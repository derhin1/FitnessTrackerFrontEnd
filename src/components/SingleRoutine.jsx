import React, { useState } from "react";

const SingleRoutine = ({ routine }) => {
  return (
    <div className = "box">
      <h3>{routine.name}</h3>
      <span>Goal: {routine.goal}</span>
      <span>By: {routine.creatorName}</span>
      <span>
        Activities:{" "}
        {routine.activities.map((activity, i) => {
          return (
            <div key={activity.id}>
              <span>Name: {activity.name}</span>
              <span>Description: {activity.description}</span>
              <span>Duration: {activity.duration}</span>
              <span>Count: {activity.count}</span>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default SingleRoutine;
