import React, { useState, useEffect } from "react";
import { getAllPublicRoutines } from "../api";
import { SingleRoutine } from "./";

  const Routines = ({loginState}) => {
  const [routines, setRoutines] = useState([]);
  const [routineForm, setRoutineForm] = useState(false);
  const [routineName, setRoutineName] = useState('');
  const [routineGoal, setRoutineGoal] = useState('');

  async function publicRoutines() {
    let routines = await getAllPublicRoutines();
    console.log(routines, "Routines");
    setRoutines(routines);
  }

  function handleClick (){
    if(loginState){
      setRoutineForm(false);
    }else{
      setRoutineForm(true);
    }
  }

  useEffect(() => {
    publicRoutines();
  }, []);
  
  return (
    <>
    <h1>All Routines</h1>
    <a onClick={handleClick}> Add New Routine </a>
    {routineForm ?  (
    <form>
      <input type = 'text' value = {routineName} placeholder = 'Routine Name' onChange={(event) => {
      setRoutineName(event.target.value);
    }}>  
      </input> 

      <input type = 'text' value = {routineGoal} placeholder = 'Routine Goal' onChange={(event) => {
      setRoutineGoal(event.target.value);
    }}>  
      </input> 
      <button type = ' Submit '></button>
    </form>): null }
    <div>

      {routines.map((routine) => {
        return <SingleRoutine routine={routine} />;
      })}
    </div>
    </>
  );
};

export default Routines;
