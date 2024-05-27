import React, { useState } from "react";
import classes from "./App.module.scss";
import { Autocomplete } from "./pages/autocomplete/Autocomplete";
import { Buttons } from "./pages/buttons/Buttons";

function App() {
  const [mode, setMode] = useState<boolean>(true);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.content}>
        <button onClick={() => setMode(!mode)} className={classes.button}>
          Click me!
        </button>
        <div className={classes.componentContainer}>
          {mode === true ? <Autocomplete /> : <Buttons />}
        </div>
      </div>
    </div>
  );
}

export default App;
