'use strict';

function test(rules, obj, data, error) {
	error = error || function(message) {
		console.warn(message);
	};

	if (rules !== undefined && rules !== null) {
		if (!rules(obj, data,error)) {
			return false;
		}
		
		return true;
	}
	
	console.log('no rules given');
	
	return true;
}

module.exports = test;