import React from "react";
import PropTypes from "prop-types";
import { directive } from "@babel/types";
import axios from "axios";

// class App extends React.Component {
// 	state = {
// 		count: 0
// 	};
// 	add = () => {
// 		this.setState(currnet => ({ count: current.count + 1 }))
// 	};
// 	minus = () => {
// 		this.setState({ count: this.state.count - 1});
// 	};
// 	componentDidMount() {
// 		console.log("Component rendered");
// 	}
// 	componentDidUpdate() {
// 		console.log("I just update");
// 	}
// 	componenetWillUnmount() {
// 		console.log("Goodbye, cruel world");
// 	}
// 	render () {
// 		return (
// 			<div>
// 				<h1> The number is: {this.state.count}</h1>
// 				<button onClick={this.add}>Add</button>
// 				<button onClick={this.minus}>Minus</button>
// 			</div>
// 		);	
// 	}
// }


class App extends React.Component {
	state = {
		isLoading: true,
		movies: []
	};
	getMovies = async () => {
		const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
	}
	componentDidMount() {
		this.getMovies();
	}
	render() {
		const { isLoading } = this.state;
		return <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>
	}
}
export default App;
 