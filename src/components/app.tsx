import { h } from 'preact';
const style = require('../style/index.module.scss').default;
import Child from "./child";

const App = () => (
	<div class={style.appContainer}>
		<h1 class={style.bgGray200}>Hello world!</h1>
		<Child />
	</div>
)

export default App;
