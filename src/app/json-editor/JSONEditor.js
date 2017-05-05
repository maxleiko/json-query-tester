import React from 'react';
import './JSONEditor.css';
import 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/json';
import 'brace/theme/ambiance';

const style = {
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	width: '100%',
	height: '100%'
};

const noop = () => {};
const DEFAULT = {
	fontSize: 16,
	tabSize: 2,
	readOnly: false
};

const JSONEditor = ({ className, model, onModelUpdated = noop, options }) => {
	function onChange(val) {
		try {
			const model = JSON.parse(val);
			onModelUpdated(model);
		} catch (ignore) {}
	}

	const value = JSON.stringify(model, null, 2);

	return (
		<div className={className}>
			<AceEditor
				mode="json"
				theme="ambiance"
				defaultValue={value}
				value={value}
				style={style}
				onChange={onChange}
				editorProps={{ $blockScrolling: true }}
				{...DEFAULT}
				{...options}
			/>
		</div>
	);
};

export default JSONEditor;
