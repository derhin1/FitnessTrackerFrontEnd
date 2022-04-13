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
  const [edit, setEdit] = useState(false);
  const [updateRoutineName, setUpdateRoutineName] = useState("");
  const [updateRoutineGoal, setUpdateRoutineGoal] = useState("");

  function handleClick() {
    if (loginState) {
      setRoutineForm(true);
      console.log(user.username);
    } else {
      setRoutineForm(false);
      console.log(myRoutines);
    }
  }

  async function handleSubmit() {
    let newPost = await postNewRoutine(routineName, routineGoal, token);
    if (newPost.id) {
      setSuccess(true);
      setRoutineName("");
      setRoutineGoal("");
      setRoutineForm(false);
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
      console.log(user.username);
      console.log(allMyRoutines, "allMyRoutines");
      setMyRoutines(allMyRoutines);
    }
  }

  function handleEdit() {
    setEdit(true);
  }

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

  function handleDelete() {
    return;
  }

  useEffect(() => {
    loadRoutines();
  }, []);

  useEffect(() => {
    loadRoutines();
  }, [user]);

  return (
    <>
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
      {success ? <div>New routine has been added!</div> : null}
      <h3>My Routines</h3>
      <div>
        {myRoutines.map((routine, i) => {
          return (
            <>
              <MySingleRoutine key={i} routine={routine} />
              {/* <button onClick={handleEdit}>Update</button> */}
              {/* <button onClick={handleDelete}>Delete</button> */}
            </>
          );
        })}
      </div>
    </>
  );
};

export default MyRoutines;
