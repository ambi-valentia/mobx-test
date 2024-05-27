import { makeAutoObservable } from "mobx";

class ButtonsStore {
    inputValue: string = '';

    constructor() {
        makeAutoObservable(this);
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

export default ButtonsStore;