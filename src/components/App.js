import React from "react";
import About from "./About"
import NavBar from "./Navbar"
import Home from "./Home"



function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}


function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

export default App;