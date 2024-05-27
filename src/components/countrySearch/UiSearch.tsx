import { useEffect } from "react";
import { CountryInfo } from "../../api/apiService";
import classes from "./UiSearch.module.scss";

interface UiSearchProps {
  countryHints: CountryInfo[];
  hintNumber: number;
  inputValue: string;
  isLoading: boolean;
  setInput: (value: string) => void;
  getAutocomplete: () => void;
  setHintsNumber: (hints: number) => void;
}

export const UiSearch = ({
  countryHints,
  hintNumber,
  inputValue,
  isLoading,
  setInput,
  getAutocomplete,
  setHintsNumber,
}: UiSearchProps) => {
  useEffect(() => {
    getAutocomplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <>
      <div>
        Max hints amount:
        <input
          type="number"
          className={classes.input}
          value={hintNumber}
          onChange={(e) => setHintsNumber(Number(e.target.value))}
        />
      </div>
      <div className={classes.search}>
        <input
          className={classes.input}
          value={inputValue}
          onChange={(e) => setInput(e.target.value)}
        />
        {isLoading ? (
          <ul className={classes.list}>
            <li className={classes.list__item}>Loading... </li>
          </ul>
        ) : (
          countryHints && (
            <ul className={classes.list}>
              {countryHints.slice(0, hintNumber).map((hint) => {
                return (
                  <li>
                    <button
                      className={classes.list__item}
                      onClick={() => {
                        setInput(hint.name + ", " + hint.fullName);
                      }}
                    >
                      {hint.name}, {hint.fullName}{" "}
                      <img src={hint.flag} alt="flag" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )
        )}
      </div>
    </>
  );
};
