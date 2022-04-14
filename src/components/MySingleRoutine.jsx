import React, { useState, useEffect } from "react";
import {
  updateRoutine,
  deleteRoutine,
  getAllActivities,
  addActivityToRoutine,
  updateRoutineActivity,
  deleteRoutineActivity,
} from "../api";
import useAuth from "../hooks/useAuth";

const MySingleRoutine = ({ routine }) => {
  const [updateRoutineName, setUpdateRoutineName] = useState("");
  const [updateRoutineGoal, setUpdateRoutineGoal] = useState("");
  const [edit, setEdit] = useState(false);
  const [addActivity, setAddActivity] = useState(false);
  const [updateActivity, setUpdateActivity] = useState(false);
  const [activitiesList, setActivitiesList] = useState([]);
  const [activities, setActivities] = useState("");
  const [activityRoutine, setActivityRoutine] = useState("");
  const [duration, setDuration] = useState("");
  const [updateDuration, setUpdateDuration] = useState("");
  const [updateCount, setUpdateCount] = useState("");
  const [count, setCount] = useState("");
  const [deleteActivityRoutine, setDeleteActivityRoutine] = useState("");
  const [deleteActivity, setDeleteActivity] = useState(false);
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
    setEdit(true);
  }

  async function handleDelete() {
    await deleteRoutine(routine.id, token);
  }

  function handleAddActivity() {
    setAddActivity(true);
  }

  function handleUpdateActivity() {
    setUpdateActivity(true);
  }

  function handleDeleteActivity() {
    setDeleteActivity(true);
  }

  function activityForm() {
    async function handleSubmit() {
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
          <label>Add Activity: </label>
          <select
            name="activities"
            id="select-activities"
            value={activities}
            onChange={(event) => {
              setActivities(event.target.value);
            }}
          >
            <option value="null"></option>
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

  function updateActivityForm() {
    async function handleSubmit() {
      await updateRoutineActivity(
        activityRoutine,
        updateCount,
        updateDuration,
        token
      );
    }
    return (
      <>
        <fieldset>
          <label>Update Activity: </label>
          <select
            name="updateActivities"
            id="select-activities"
            value={activityRoutine}
            onChange={(event) => {
              setActivityRoutine(event.target.value);
            }}
          >
            <option value="null"></option>
            {routine.activities.map((activity, index) => {
              return (
                <option key={index} value={activity.routineActivityId}>
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
              value={updateDuration}
              placeholder="Duration"
              onChange={(event) => {
                setUpdateDuration(event.target.value);
              }}
            ></input>

            <input
              type="text"
              value={updateCount}
              placeholder="Count"
              onChange={(event) => {
                setUpdateCount(event.target.value);
              }}
            ></input>
            <button type=" Submit">Update</button>
          </form>
        </fieldset>
      </>
    );
  }

  function deleteActivityForm() {
    async function handleSubmit() {
      await deleteRoutineActivity(deleteActivityRoutine, token);
    }
    return (
      <>
        <fieldset>
          <label>Delete Activity: </label>
          <select
            name="deleteActivities"
            id="select-activities"
            value={deleteActivityRoutine}
            onChange={(event) => {
              setDeleteActivityRoutine(event.target.value);
            }}
          >
            <option value="null"></option>
            {routine.activities.map((activity, index) => {
              return (
                <option key={index} value={activity.routineActivityId}>
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
            <button type=" Submit">Delete</button>
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
      <button onClick={handleEdit}>Update Routine</button>
      {edit && routine.id ? editForms() : null}
      <button onClick={handleDelete}>Delete Routine</button>
      <button onClick={handleAddActivity}>Add Activity</button>
      <button onClick={handleUpdateActivity}>Update Activity</button>
      <button onClick={handleDeleteActivity}>Delete Activity</button>
      {addActivity && routine.id ? activityForm() : null}
      {updateActivity && routine.id ? updateActivityForm() : null}
      {deleteActivity && routine.id ? deleteActivityForm() : null}
    </div>
  );
};

export default MySingleRoutine;
