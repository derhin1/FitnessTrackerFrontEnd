import React from "react";

const SingleActivity = ({ activity }) => {
  return (
    <div key={activity.id}>
      <span> Activity: {activity.name}</span>
      <span>Description: {activity.description}</span>
    </div>
  );
};

export default SingleActivity;
