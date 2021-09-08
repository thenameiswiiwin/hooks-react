import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Form from './components/Form';
import Tabs from './components/Tabs';

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<Nav />
			</div>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/useinput" component={Form} />
				<Route path="/usetabs" component={Tabs} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
