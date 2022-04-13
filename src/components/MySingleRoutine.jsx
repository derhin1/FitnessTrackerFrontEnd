import React, { useState } from "react";

const MySingleRoutine = ({ routine }) => {
  const [updateRoutineName, setUpdateRoutineName] = useState("");
  const [updateRoutineGoal, setUpdateRoutineGoal] = useState("");
  const [edit, setEdit] = useState(false);
  function editForms() {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
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
              <span>Name: {activity.name}</span>
              <span>Description: {activity.description}</span>
              <span>Duration: {activity.duration}</span>
              <span>Count: {activity.count}</span>
            </div>
          );
        })}
      </span>
      <button onClick={handleEdit}>Update</button>
      {edit && routine.id ? editForms() : null}
    </div>
  );
};

export default MySingleRoutine;
