import { h } from 'preact';
const style = require('../style/index.scss');
import Child from "./child";

const App = () => (
	<div class={style.appContainer}>
		<h1>Hello world!</h1>
		<Child />
	</div>
)

export default App;
