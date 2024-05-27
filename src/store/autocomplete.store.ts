import { action, makeObservable, observable, override, runInAction } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";
import ButtonsViewModel from "./buttons.store";

class AutocompleteViewModel extends ButtonsViewModel{
    hintNumber: number = 3;
    isLoading: boolean = false;
    countryHints: CountryInfo[] = [];

    constructor() {
        super()
        makeObservable(this, {
            inputValue: override,
            setInput: override,

            hintNumber: observable,
            isLoading: observable,
            countryHints: observable,
            setHintsNumber: action,
            getAutocomplete: action,
        })
    }

    setHintsNumber = (hints: number) => {
        this.hintNumber = hints;
    }

    getAutocomplete = async () => {
        try {
            this.isLoading = true;
            const response = await getCountryByName(this.inputValue);

            runInAction(() => {
                this.countryHints = response;
                this.isLoading = false;})
        } catch {
            this.isLoading = false;
        }
    }
}

export default AutocompleteViewModel;