# An app using MobX + MVVM

Implements 2 components

## Buttons control component
A text input that allows configuring and displaying a different number of buttons to the left and right of the input itself by passing `buttonsLeft` and `buttonsRight` props into the component. The buttons allow configuring `text` and `callBackFn`, which is called when the button is clicked.

Two buttons control components are implemented in the main component:

```
Component with 2 right buttons;
When the first button is clicked, the value of the input is cleared;
When the second button is clicked, the value of the input changes to 'Hello world!';
```
```
Component with 1 right and 1 left button;
When the right button is clicked, text from the input is alerted if not empty;
When the left button is clicked, text from the input is alerted if this text is a number;
```
	
## Autotomplete control component
A text input that displays country hints while typing. Hints are displayed in a dropdown list. Each list item contains `name`, `full name` and `flag`. When selected, the value from the hint is entered into the input. The maximum number of hints displayed is controlled via a number input field on the page.

To receive hints, the project has an asynchronous function simulating API - `apiService/getCountryByName`.
