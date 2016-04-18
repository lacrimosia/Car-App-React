import React from 'react';
import ReactDOM from 'react-dom';

/*class App extends React.Component {
	render(){
		// return React.createElement('h1', null, 'Her ewwewe' );
		return <h1>Lefwefw</h1>;
	}
}*/


// stateless component has no state, but class does
// const App = () => <h1>Hello Egg</h1>

// return multiple elements
class App extends React.Component {
	// dealing with states
	constructor(){
		super();
		this.state = {
			txt: 'this is the state of text'
		}
		// access this.state.txt to store in {}
	}
	render(){
		// variable for getting props
		let txt = this.props.txt;
		return(
			<div>
				<h1>Hola</h1> 
				<b>{this.state.txt}</b>
			</div>
			);
	}
}

// Types can also be set as well to expect certain data
// .isRequired can be added to any property to require a value
App.propTypes = {
	txt: React.PropTypes.string, 
	cat: React.PropTypes.number
}

// default properties can be set. They work if there is no prop defined on element
App.defaultProps = {
	txt: 'This is the day'
}


// using properties
ReactDOM.render(<App txt="f"/>, 
document.getElementById('app'));

export default App