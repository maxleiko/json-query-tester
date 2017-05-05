import React, {Component} from 'react';
import './App.css';
import JSONEditor from './json-editor/JSONEditor';
import Query from './query/Query';
import jsonQuery from 'json-query';
import localStorage from '../util/localStorage';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			model: props.model || {
				namespaces: [
					{ name: 'kevoree', owner: 'kevoree', typeDefinitions: [] },
					{ name: 'user', owner: 'user', typeDefinitions: [] }
				]
			},
			query: props.query || 'namespaces'
		};
	}

	onModelUpdated(model) {
		this.setState({ model: model });
		localStorage.set('model', model);
	}

	onQueryUpdated(query) {
		this.setState({ query: query });
		localStorage.set('query', query);
	}

	render() {
		let result = {};
		try {
			result = jsonQuery(this.state.query, { data: this.state.model });
		} catch (ignore) {}

		return (
			<div className="App">
				<div className="App-header">
					<h2 className="App-title">JSON-query Tester</h2>
				</div>
				<JSONEditor
					className="App-leftPanel"
					model={this.state.model}
					onModelUpdated={(model) => this.onModelUpdated(model)}
				/>
			<div className="App-rightPanel">
					<div className="App-query">
						<Query value={this.state.query} onChange={(evt) => this.onQueryUpdated(evt.target.value)} />
					</div>
					<div className="App-result">
						<JSONEditor model={result} options={{ readOnly: true }} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;