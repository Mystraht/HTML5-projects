define ([], function () {
	var list = {};

	// Params :
	// id (unique id)
	// scope (function scope)
	// fnc : function to launch
	// other args : parameters
	once = function (id ,scope, fnc) {
		if (list[id] !== undefined) return;
		var newArgs = [];
		for (var i = 3; i < arguments.length; i++) {
			newArgs.push(arguments[i]);
		}
		fnc.apply(scope, newArgs);
		list[id] = 1;
	};

	return once;
});