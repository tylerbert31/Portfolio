import React from "react";
import "./intro.css";
import MessageMe from "./message-me";
import ReactTypingEffect from "react-typing-effect";

function Intro() {
  return (
    <React.Fragment>
      <div className="intro-container">
        <h2>Hi, my name is</h2>
        <h1>Tyler Bert Baring</h1>
        <div className="text-effect">
          <ReactTypingEffect text={["A junior web developer."]} speed={"100"} />
        </div>

        <p>I'm a junior web developer specializing in ReactJS.</p>
        <MessageMe />
      </div>
    </React.Fragment>
  );
}

export default Intro;
