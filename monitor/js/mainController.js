app.controller('mainController', ['$scope','socket','$http',function($scope,socket,$http) {
	// $scope.listItem=[
	// 	{listtext:'List number 1'},
	// 	{listtext:'List number 2'},
	// 	{listtext:'List number 3'},
	// 	{listtext:'List number 4'}];
	$scope.choices = [" 1.? "," 2.? "," 3.? "," 4.? "]
	$scope.question = "???";
	$scope.listQuestion = [];
	
	// $scope.listQuestion = [{"id":1,"question":"1 + 1 = ?","choices":[-1,1,0,2],"ans":4},
	// 					   {"id":2,"question":"5 - 4 = ?","choices":[1,-1,2,0],"ans":1},
	// 					   {"id":3,"question":"2 + 3 = ?","choices":[3,5,7,9],"ans":2}];

	$scope.imgSrc = "http://placehold.it/50x50";
	$scope.timer = 0;

	//socket.on('input',function(resp){
	//	console.log("input :",resp);
	//});

	socket.on('timer', function(resp){
		//console.log("time :", resp);
		if(resp <= 0){
			resp = 0;
		}
		$scope.timer = parseInt(resp/10);
	})
	
	socket.on('new quiz', function(quiz){
		//console.log("Quiz: ",quiz);

		$scope.question = quiz.question;
		$scope.choices = quiz.choices; 
	})

}]);
