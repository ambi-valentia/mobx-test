import classes from "./Buttons.module.scss";
import { observer } from "mobx-react-lite";
import ButtonsStore from "../../store/buttons.store";

enum ButtonsText {
  clear = "Clear",
  hello = "Say Hello",
  alert = "Alert",
  number = "Check if Number",
}

const Input1 = new ButtonsStore();
const Input2 = new ButtonsStore();

export const Buttons = observer(() => {
  const { inputValue: input1, setInput: setInput1, onClear, onHello } = Input1;
  const {
    inputValue: input2,
    setInput: setInput2,
    onAlert,
    onNumberCheck,
  } = Input2;
  return (
    <>
      <div className={classes.wrapper}>
        <input
          value={input1}
          onChange={(e) => {
            setInput1(e.target.value);
          }}
          className={classes.input}
        />
        <div className={classes.buttons}>
          <button className={classes.button} onClick={onClear}>
            {ButtonsText.clear}
          </button>
          <button className={classes.button} onClick={onHello}>
            {ButtonsText.hello}
          </button>
        </div>
      </div>
      <div className={classes.wrapper}>
        <button className={classes.button} onClick={onNumberCheck}>
          {ButtonsText.number}
        </button>
        <input
          value={input2}
          onChange={(e) => {
            setInput2(e.target.value);
          }}
          className={classes.input}
        />
        <button className={classes.button} onClick={onAlert}>
          {ButtonsText.alert}
        </button>
      </div>
    </>
  );
});
