import { observer } from "mobx-react-lite";
import ButtonsStore from "../../store/buttons.store";
import { UiButtons } from "../../components";

enum ButtonsText {
  clear = "Clear",
  hello = "Say Hello",
  alert = "Alert",
  number = "Alert if Number",
}

const viewModel1 = new ButtonsStore();
const viewModel2 = new ButtonsStore();

export const Buttons = observer(() => {
  return (
    <>
      <UiButtons
        inputValue={viewModel1.inputValue}
        setInput={viewModel1.setInput}
        buttonsRight={[
          { text: ButtonsText.clear, callBackFn: viewModel1.onClear },
          { text: ButtonsText.hello, callBackFn: viewModel1.onHello },
        ]}
      />
      <UiButtons
        inputValue={viewModel2.inputValue}
        setInput={viewModel2.setInput}
        buttonsLeft={[
          { text: ButtonsText.number, callBackFn: viewModel2.onNumberCheck },
        ]}
        buttonsRight={[
          { text: ButtonsText.alert, callBackFn: viewModel2.onAlert },
        ]}
      />
    </>
  );
});
