import "./App.css"
import About from "./components/about/about"
import Intro from "./components/intro/intro"
import { Navbar } from "./components/navbar/navbar.js"
import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        ""
      )}

      <div id="navbar">
        <Navbar />
      </div>
      <section id="intro" className="intro">
        <Intro />
      </section>
      <section id="about" className="about">
        <About />
      </section>
    </>
  )
}

export default App
