import React from "react";

const SingleActivity = ({ activity }) => {
  console.log(activity, "activity check");
  return (
    <div key={activity.id}>
      <span>Acitivity: {activity.name}</span>
      <span>Description: {activity.description}</span>
    </div>
  );
};

export default SingleActivity;
