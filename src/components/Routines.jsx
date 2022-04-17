import React, { useState, useEffect } from "react";
import { getAllPublicRoutines } from "../api";
import { SingleRoutine } from "./";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  async function publicRoutines() {
    let routines = await getAllPublicRoutines();
    setRoutines(routines);
  }

  useEffect(() => {
    publicRoutines();
  }, []);

  return (
    <>
      <h1>All Routines</h1>
      <div>
        {routines.map((routine, i) => {
          return <SingleRoutine key={i} routine={routine} />;
        })}
      </div>
    </>
  );
};

export default Routines;
