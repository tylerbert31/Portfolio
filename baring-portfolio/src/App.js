import "./App.css"
import About from "./components/about/about"
import Intro from "./components/intro/intro"
import { Navbar } from "./components/navbar/navbar.js"

function App() {
  return (
    <>
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
