import React from "react"
import "./intro.css"
import MessageMe from "./message-me"

function Intro() {
  return (
    <React.Fragment>
      <div className="intro-container">
        <h2>Hi, my name is</h2>
        <h1>Tyler Bert Baring</h1>
        <h3>A junior web developer.</h3>
        <p>
          I'm a junior web developer specializing in Back-End development.
          Currently, I'm a 4th year Computer Science Student finishing my
          internship this 3rd of May, 2023.
        </p>
        <MessageMe />
      </div>
    </React.Fragment>
  )
}

export default Intro
