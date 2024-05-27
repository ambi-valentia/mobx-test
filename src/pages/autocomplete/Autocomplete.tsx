import { observer } from "mobx-react-lite";
import classes from "./Autocomplete.module.scss";
import AutocompleteViewModel from "../../store/autocomplete.store";
import { UiSearch } from "../../components";

const viewModel1 = new AutocompleteViewModel();
const viewModel2 = new AutocompleteViewModel();

export const Autocomplete = observer(() => {
  return (
    <div className={classes.buttons}>
      <UiSearch
        countryHints={viewModel1.countryHints}
        hintNumber={viewModel1.hintNumber}
        inputValue={viewModel1.inputValue}
        isLoading={viewModel1.isLoading}
        setInput={viewModel1.setInput}
        getAutocomplete={viewModel1.getAutocomplete}
        setHintsNumber={viewModel1.setHintsNumber}
      />
      <UiSearch
        countryHints={viewModel2.countryHints}
        hintNumber={viewModel2.hintNumber}
        inputValue={viewModel2.inputValue}
        isLoading={viewModel2.isLoading}
        setInput={viewModel2.setInput}
        getAutocomplete={viewModel2.getAutocomplete}
        setHintsNumber={viewModel2.setHintsNumber}
      />
    </div>
  );
});
