
// Home page controller
taskmanApp.controller('HomeController', function($scope, taskService, settingsService) {
	$scope.tasks = taskService.getTasks();
	$scope.percentageComplete = taskService.getPercentageComplete();
	$scope.settings = settingsService.getSettings();

	$scope.markComplete = function(taskNum) {
		$scope.tasks[taskNum].completed = !$scope.tasks[taskNum].completed;

		taskService.setTasks($scope.tasks);

        $scope.percentageComplete = taskService.getPercentageComplete();
	};

	$scope.refreshCircleValue = function() {
        try {
            var c4 = $('#circle');
            c4.circleProgress('value', $scope.percentageComplete);
        } catch(e){
        }
	};

    $scope.refreshCircleValue();

	$scope.$watch('percentageComplete', function () {

		$scope.refreshCircleValue();
	});
});

// Settings page controller
taskmanApp.controller('SettingsController', function($scope, settingsService) {
    $scope.settings = settingsService.getSettings();

    console.log("Current settings are: ", $scope.settings);
});