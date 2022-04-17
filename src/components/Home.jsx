import React from "react";
import useAuth from "../hooks/useAuth";
const Home = () => {
  const { user } = useAuth();
  return (
    <div id="Welcome">
      <h1 className="welcomeMessage" id="firstMessage">
        {" "}
        Welcome to Fitness Tracker!
      </h1>
      <h2 className="welcomeMessage" id="secondMessage">
        {" "}
        The best place to keep you healthy!{" "}
      </h2>
      {user.username !== undefined ? (
        <div id="greeting">
          <span id="User"> Hello and Welcome {`${user.username}`}!</span>
        </div>
      ) : (
        <div id="loginNotice">
          Please Note: You are not currently Logged In. Please log in to track
          your fitness!
        </div>
      )}
      <div id="image">
        <img
          src="https://media.istockphoto.com/vectors/health-care-mobile-app-concept-illustration-vector-id641600320?k=20&m=641600320&s=612x612&w=0&h=YPqP9udgbtlrAMVNsV7cx366BcoFEpVfeFtla7tYU3U="
          alt="fitness"
        />
      </div>
    </div>
  );
};

export default Home;
