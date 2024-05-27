import classes from "./UiButtons.module.scss";

interface button {
  text: string;
  callBackFn: () => void;
}

interface UiButtonsProps {
  inputValue: string;
  setInput: (input: string) => void;

  buttonsLeft?: button[];
  buttonsRight?: button[];
}

export const UiButtons = ({
  inputValue,
  setInput,
  buttonsLeft,
  buttonsRight,
}: UiButtonsProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.buttons}>
        {buttonsLeft &&
          buttonsLeft.map((button) => {
            return (
              <button className={classes.button} onClick={button.callBackFn}>
                {button.text}
              </button>
            );
          })}
      </div>
      <input
        value={inputValue}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className={classes.input}
      />
      <div className={classes.buttons}>
        {buttonsRight &&
          buttonsRight.map((button) => {
            return (
              <button className={classes.button} onClick={button.callBackFn}>
                {button.text}
              </button>
            );
          })}
      </div>
    </div>
  );
};
