taskmanApp.filter('convertCompleted', function() {
	return function(x) {
		if (x == true) { return 'Complete!'; }
		else { return ''; }
	};
});