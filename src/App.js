import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routers/Home"
import About from "./routers/About";

function App() {
	return <HashRouter>
		<Route path="/" exact={true} component={Home} />
		<Route path="/about" component={About} />
	</HashRouter>
}

export default App; 