taskmanApp.service('taskService', function() {
	// data for all possible tasks
	var tasksArray = [
		{name:'Say "NO" to Deforestation', completed: false},
		{name:'Fund Raise for the Rainforest Foundation', completed: false},
		{name:'Share Conservation Articles on Social Media', completed: false},
		{name:'Use BitSeeds', completed: false},
		{name:'Buy Responsibly Sourced Products', completed: false},
		{name:'Create a Habitat for Migrating Animals', completed: false},
		{name:'Contact Governments and Insist on Change', completed: false},
		{name:'Support Indigenous Communities', completed: false},
		{name:'Reduce your Footprint', completed: false},
		{name:'Make a Donation to the Rainforest Foundation', completed: false}
	];

	var getTasks = function() {
		return tasksArray;
	};

	var setTasks = function(tasks) {
		tasksArray = tasks;

		return tasksArray;
	};

	var getPercentageComplete = function() {
        var completedTasks = 0;
        for (var i = 0; i < tasksArray.length; i++) {
            // console.log(taskService[i]);
            if (tasksArray[i].completed) {
                completedTasks++;
            }
        }

        return completedTasks / tasksArray.length;
	};

	// shuffle the tasks to give the visitor 6 random tasks
	var shuffleAndLimitArray = function(array) {
		var m = array.length, t, i;
		// While there remain elements to shuffle
		while (m) {
			// Pick a remaining element…
			i = Math.floor(Math.random() * m--);
			// And swap it with the current element.
			t = array[m];
			array[m] = array[i];
			array[i] = t;
		}
		array.splice(5,4);
		return array;
	};

	shuffleAndLimitArray(tasksArray);

	return {
		getTasks : getTasks,
		setTasks : setTasks,
        getPercentageComplete : getPercentageComplete
    };
});
