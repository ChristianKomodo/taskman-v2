taskmanApp.directive('progressCircle', function() {
	return {
		restrict: 'A',
		scope: {
			percentageComplete: '=',
			circleSize: '=',
			circleColorA: '=',
			circleColorB: '='
		},
		templateUrl: 'js/directives/progress-circle.html',
		link: function(scope, element, attrs, controllers) {
			// console.log("parent scope is ", scope.$parent);
			console.log("scope.percentageComplete is ", scope.percentageComplete);
			// $('#circle').circleProgress({
			// 	value: 0.75,
			// 	size: 150,
			// 	fill: {
			// 		gradient: ["red", "orange"]
			// 	}
			// }).on('circle-animation-progress', function(event, progress) {
			// 	$(this).find('strong').html(Math.round(100 * progress) + '<sup>%</sup>');
			// });
			var c4 = $('#circle');

			c4.circleProgress({
				// startAngle: -Math.PI / 4 * 3,
				value: 0,
				size: scope.circleSize,
				fill: {
					gradient: [scope.circleColorA, scope.circleColorB]
				},
				lineCap: 'round'
			});

			// Let's emulate dynamic value update
			// setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
			// setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
			// setTimeout(function() { c4.circleProgress('value', 0.5); }, 2100);

			// $('#circle').circleProgress({ value: 0.5, fill: { color: 'orange' }});
			// $('#circle').circleProgress('redraw'); // use current configuration and redraw
			// $('#circle').circleProgress(); // alias for 'redraw'
			// $('#circle').circleProgress({ size: 150 }); // set new size and redraw
		}
	};
});