import React, { useState, useEffect } from "react";
import { getAllActivities, createNewActivity } from "../api";
import { SingleActivity } from "./";
import useAuth from "../hooks/useAuth";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [addActivity, setAddActivity] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [error, setError] = useState(false);
  const { token, user } = useAuth();

  async function publicActivities() {
    let allActivities = await getAllActivities();
    setActivities(allActivities);
  }

  function handleClick() {
    setAddActivity(true);
  }

  async function handleSubmit() {
    let response = await createNewActivity(
      activityName,
      activityDescription,
      token
    );
    console.log(response, "response");
    if (response.error) {
      setError(true);
    } else {
      setActivities([response, ...activities]);
      setError(false);
    }
  }

  useEffect(() => {
    publicActivities();
  }, []);

  return (
    <>
      <h1>All Activities</h1>
      {user.username ? (
        <a onClick={handleClick}> <p>Add A New Activity!</p> </a>
      ) : null}
      {addActivity ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            value={activityName}
            placeholder="Activity Name"
            onChange={(event) => {
              setActivityName(event.target.value);
            }}
          ></input>

          <input
            type="text"
            value={activityDescription}
            placeholder="Activity Description"
            onChange={(event) => {
              setActivityDescription(event.target.value);
            }}
          ></input>
          <button type=" Submit">Submit</button>
        </form>
      ) : null}
      {error ? <div>Activity already exists!</div> : null}
      <div>
        {activities.map((activity, i) => {
          return <SingleActivity key={i} activity={activity} />;
        })}
      </div>
    </>
  );
};

export default Activities;
