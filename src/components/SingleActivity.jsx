import React from "react";

const SingleActivity = ({ activity }) => {
  return (
    <div className = "new_routine" key={activity.id}>
      <span><b> Activity </b>: {activity.name}</span><br></br>
      <span><b> Description </b>: {activity.description}</span>
    </div>
  );
};

export default SingleActivity;
