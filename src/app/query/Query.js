import React from 'react';
import './Query.css';

const Query = ({ value, onChange }) => {
	return (
		<input
			className="Query-input"
			defaultValue={value}
			onChange={onChange}
			placeholder="any json-query (ie. namespaces[name=kevoree])"
		/>
	);
};

export default Query;
