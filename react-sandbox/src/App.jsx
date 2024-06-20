import { useState } from "react";
import "./App.css";
import { Greeting, GreetingsHoC } from "./components/Greeting";

const App = () => {
  // STATES & VARIABLES
  
  //RETURN
  return (
    <>
      <GreetingsHoC name={"Alvin"}>
        <p>I want to welcome you to the website</p>
      </GreetingsHoC>
    </>
  );
};
export default App;