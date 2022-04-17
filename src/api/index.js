export const register = async (username, password) => {
  try {
    let response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (username, password) => {
  try {
    let response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllPublicRoutines = async () => {
  try {
    let response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllActivities = async () => {
  try {
    let response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/activities",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const postNewRoutine = async (name, goal, token) => {
  try {
    let response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic: true,
        }),
      }
    );
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMe = async (token) => {
  try {
    let response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPublicRoutinesByUsername = async (username) => {
  try {
    let response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateRoutine = async (routineId, name, goal, token) => {
  try {
    let response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic: true,
        }),
      }
    );

    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteRoutine = async (routineId, token) => {
  try {
    await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};

export const addActivityToRoutine = async (
  routineId,
  activityId,
  duration,
  count,
  token
) => {
  try {
    let response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          activityId,
          count,
          duration,
        }),
      }
    );
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateRoutineActivity = async (
  routineActivityId,
  count,
  duration,
  token
) => {
  try {
    let response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteRoutineActivity = async (routineActivityId, token) => {
  try {
    let response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const createNewActivity = async (name, description, token) => {
  try {
    let response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/activities",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          description,
        }),
      }
    );
    let data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
