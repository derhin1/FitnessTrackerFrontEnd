import React, { useState, useEffect } from "react";
import { getAllPublicRoutines } from "../api";
import { SingleRoutine } from "./";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  async function publicRoutines() {
    let routines = await getAllPublicRoutines();
    console.log(routines, "Routines");
    setRoutines(routines);
  }

  useEffect(() => {
    publicRoutines();
  }, []);
  return (
    <div>
      {routines.map((routine) => {
        return <SingleRoutine routine={routine} />;
      })}
    </div>
  );
};

export default Routines;
