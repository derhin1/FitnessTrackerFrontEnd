import React from "react";

const SingleRoutine = ({ routine }) => {
  return (
    <div className="box">
      <h3>{routine.name}</h3>
      <span>
        <b> Goal </b>: {routine.goal}
      </span>
      <span>
        <b> By </b>: {routine.creatorName}
      </span>
      <span>
        Activities:{" "}
        {routine.activities.map((activity, i) => {
          return (
            <div key={activity.id}>
              <span>
                <b> Name </b>: {activity.name}
              </span>
              <span>
                <b> Description </b>: {activity.description}
              </span>
              <span>
                <b> Duration </b>: {activity.duration}
              </span>
              <span>
                <b> Count </b>: {activity.count}
              </span>
            </div>
          );
        })}
      </span>
    </div>
  );
};

export default SingleRoutine;
