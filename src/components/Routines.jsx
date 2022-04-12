import React, { useState, useEffect } from "react";
import { getAllPublicRoutines, postNewRoutine } from "../api";
import { SingleRoutine } from "./";

const Routines = ({ loginState }) => {
  const [routines, setRoutines] = useState([]);
  const [routineForm, setRoutineForm] = useState(false);
  const [routineName, setRoutineName] = useState("");
  const [routineGoal, setRoutineGoal] = useState("");
  const [error, setError] = useState(false);
  const [addRoutine, setAddRoutine] = useState({});

  async function publicRoutines() {
    let routines = await getAllPublicRoutines();
    console.log(routines);
    setRoutines(routines);
  }

  function handleClick() {
    if (loginState) {
      console.log(routineForm, "testing");
      setRoutineForm(true);
    } else {
      setRoutineForm(false);
    }
  }

  async function handleSubmit() {
    let newPost = await postNewRoutine(
      routineName,
      routineGoal,
      localStorage.getItem("token")
    );
    setAddRoutine(newPost);
    if (newPost.error) {
      setError(true);
    } else {
      setError(false);
    }
  }

  useEffect(() => {
    publicRoutines();
  }, []);

  useEffect(() => {
    publicRoutines();
  }, [addRoutine]);

  return (
    <>
      <h1>All Routines</h1>
      <a onClick={handleClick}> Add A New Routine! </a>
      {routineForm ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            value={routineName}
            placeholder="Routine Name"
            onChange={(event) => {
              setRoutineName(event.target.value);
            }}
          ></input>

          <input
            type="text"
            value={routineGoal}
            placeholder="Routine Goal"
            onChange={(event) => {
              setRoutineGoal(event.target.value);
            }}
          ></input>
          <button type=" Submit">Submit</button>
        </form>
      ) : null}
      {error ? <div>Routine Name already exists! Try again.</div> : null}
      <div>
        {routines.map((routine, i) => {
          return <SingleRoutine key={i} routine={routine} />;
        })}
      </div>
    </>
  );
};

export default Routines;
