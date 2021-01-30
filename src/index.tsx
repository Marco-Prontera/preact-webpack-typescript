import App from './components/app';
import {h, render} from "preact";

const rootElement = document.getElementById("app");
if (rootElement.hasChildNodes()) {
    render(<App />, rootElement, rootElement.firstElementChild);
} else {
    render(<App />, rootElement);
}
