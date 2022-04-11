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
          password
      }),
    }
  );
  const data = await response.json();
  console.log(data, 'data')
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
          password
      }),
    }
  );
  const data = await response.json();
  console.log(data, 'data')
  return data;
  } catch (error) {
      throw error;
  }
   
};