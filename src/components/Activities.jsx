import React, { useState, useEffect } from "react";
import { getAllActivities } from "../api";
import { SingleActivity } from "./";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  async function publicActivities() {
    let allActivities = await getAllActivities();
    setActivities(allActivities);
  }

  useEffect(() => {
    publicActivities();
  }, []);

  return (
    <>
      <h1>All Activities</h1>
      <div>
        {activities.map((activity, i) => {
          return <SingleActivity key={i} activity={activity} />;
        })}
      </div>
    </>
  );
};

export default Activities;
