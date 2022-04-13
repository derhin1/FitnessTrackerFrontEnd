import React, { useState, useEffect } from "react";
import {
  updateRoutine,
  deleteRoutine,
  getAllActivities,
  addActivityToRoutine,
} from "../api";
import useAuth from "../hooks/useAuth";

const MySingleRoutine = ({ routine }) => {
  const [updateRoutineName, setUpdateRoutineName] = useState("");
  const [updateRoutineGoal, setUpdateRoutineGoal] = useState("");
  const [edit, setEdit] = useState(false);
  const [addActivity, setAddActivity] = useState(false);
  const [activitiesList, setActivitiesList] = useState([]);
  const [activities, setActivities] = useState("");
  const [duration, setDuration] = useState("");
  const [count, setCount] = useState("");
  const { token } = useAuth();

  function editForms() {
    async function updateSubmit() {
      await updateRoutine(
        routine.id,
        updateRoutineName,
        updateRoutineGoal,
        token
      );

      setUpdateRoutineName("");
      setUpdateRoutineGoal("");
    }
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          updateSubmit();
        }}
      >
        <input
          type="text"
          value={updateRoutineName}
          placeholder="Update Routine Name"
          onChange={(event) => {
            setUpdateRoutineName(event.target.value);
          }}
        ></input>

        <input
          type="text"
          value={updateRoutineGoal}
          placeholder="Update Routine Goal"
          onChange={(event) => {
            setUpdateRoutineGoal(event.target.value);
          }}
        ></input>
        <button type=" Submit">Submit</button>
      </form>
    );
  }

  function handleEdit() {
    console.log(routine.id, "routineID");
    setEdit(true);
  }

  async function handleDelete() {
    await deleteRoutine(routine.id, token);
  }

  function handleAddActivity() {
    setAddActivity(true);
  }

  function activityForm() {
    async function handleSubmit() {
      console.log(routine.id, "routineid");
      console.log(activities, "activityId");
      console.log(duration, "duration");
      console.log(count, "count");
      await addActivityToRoutine(
        routine.id,
        activities,
        duration,
        count,
        token
      );
    }
    return (
      <>
        <fieldset>
          <label>Activity: </label>
          <select
            name="activities"
            id="select-activities"
            value={activities}
            onChange={(event) => {
              setActivities(event.target.value);
            }}
          >
            {/* <option value="any">Any</option> */}
            {activitiesList.map((activity, index) => {
              return (
                <option key={index} value={activity.id}>
                  {activity.name}
                </option>
              );
            })}
          </select>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <input
              type="text"
              value={duration}
              placeholder="Duration"
              onChange={(event) => {
                setDuration(event.target.value);
              }}
            ></input>

            <input
              type="text"
              value={count}
              placeholder="Count"
              onChange={(event) => {
                setCount(event.target.value);
              }}
            ></input>
            <button type=" Submit">Add</button>
          </form>
        </fieldset>
      </>
    );
  }

  async function initializeActivities() {
    let activities = await getAllActivities();
    setActivitiesList(activities);
  }

  useEffect(() => {
    initializeActivities();
  }, []);

  return (
    <div>
      <h3>{routine.name}</h3>
      <span>Goal: {routine.goal}</span>
      <span>By: {routine.creatorName}</span>
      <span>
        Activities:{" "}
        {routine.activities.map((activity, i) => {
          return (
            <div key={activity.id}>
              <span>Activity: {activity.name}</span>
              <span>Description: {activity.description}</span>
              <span>Duration: {activity.duration}</span>
              <span>Count: {activity.count}</span>
            </div>
          );
        })}
      </span>
      <button onClick={handleEdit}>Update</button>
      {edit && routine.id ? editForms() : null}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleAddActivity}>Add Activity</button>
      {addActivity && routine.id ? activityForm() : null}
    </div>
  );
};

export default MySingleRoutine;
