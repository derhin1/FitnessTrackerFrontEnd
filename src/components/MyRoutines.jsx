import React, { useState, useEffect } from "react";
import { postNewRoutine, getPublicRoutinesByUsername } from "../api";
import useAuth from "../hooks/useAuth";
import { MySingleRoutine } from "./";

const MyRoutines = ({ loginState }) => {
  const [routineForm, setRoutineForm] = useState(false);
  const [routineName, setRoutineName] = useState("");
  const [routineGoal, setRoutineGoal] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { token, user } = useAuth();
  const [myRoutines, setMyRoutines] = useState([]);

  function handleClick() {
    if (loginState) {
      setRoutineForm(true);
    } else {
      setRoutineForm(false);
    }
  }

  async function handleSubmit() {
    let newPost = await postNewRoutine(routineName, routineGoal, token);
    console.log(newPost);
    if (newPost.id) {
      setSuccess(true);
      setRoutineName("");
      setRoutineGoal("");
      setRoutineForm(false);
      newPost.activities = [];
      newPost.creatorName = user.username;
      setMyRoutines([newPost, ...myRoutines]);
    } else {
      setSuccess(false);
    }
    if (newPost.error) {
      setError(true);
    } else {
      setError(false);
    }
  }

  async function loadRoutines() {
    if (user.username) {
      let allMyRoutines = await getPublicRoutinesByUsername(user.username);
      setMyRoutines(allMyRoutines);
    }
  }

  useEffect(() => {
    loadRoutines();
  }, []);

  useEffect(() => {
    loadRoutines();
  }, [user]);

  return (
    <>
    <h1>My Routines</h1>
      <a className="add_new" onClick={handleClick}> <p>Add A New Routine!</p> </a>
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
      {success ? <div><p>New routine has been added!</p></div> : null}
      <div className = "new_routine">
        {myRoutines.map((routine, i) => {
          return (
            <>
              <MySingleRoutine key={i} routine={routine} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default MyRoutines;
