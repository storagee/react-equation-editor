var React = require('react');
var ReactDOM = require('react-dom');
var ReactEquationEditor = require('react-equation-editor');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactEquationEditor />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
