import React, { useState } from "react";
import classes from './App.module.scss';
import { Autocomplete } from "./pages/autocomplete/Autocomplete";
import { Buttons } from "./pages/buttons/Buttons";

function App() {
  const [mode, setMode] = useState<boolean>(true);

  return (
    <div className={classes.mainContainer}>
      <button
        onClick={() => setMode(!mode)}
      >
        Click me!
      </button>
      {mode === true ? <Autocomplete /> : <Buttons />}
    </div>
  );
}

export default App;
