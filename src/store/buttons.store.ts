import { action, makeAutoObservable, makeObservable, observable } from "mobx";

class ButtonsViewModel {
    inputValue: string = '';

    constructor() {
        makeObservable( this,
          {
            inputValue: observable,
            setInput: action,
          }
        );
    }

    setInput = (value: string) => {
        this.inputValue = value;
    }

    onClear = () => {
        this.setInput('');
      };
    
    onHello = () => {
        this.setInput("Hello world!");
      };
    
    onAlert = () => {
        if(this.inputValue) alert(this.inputValue);
      };
    
    onNumberCheck = () => {
        if (Number(this.inputValue)) this.onAlert();
        else return;
      };
}

export default ButtonsViewModel;