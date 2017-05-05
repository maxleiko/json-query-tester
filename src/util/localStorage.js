export default {
	get(key) {
		return JSON.parse(window.localStorage.getItem(`json-query.${key}`));
	},

	set(key, value) {
		window.localStorage.setItem(`json-query.${key}`, JSON.stringify(value));
	}
};
