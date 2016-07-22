app.controller('questionsController', ['$scope','$http',function($scope,$http) {
	$scope.listQuestion = [];
	$http({
		method:'GET',
		url: 'http://192.168.10.1:3000/questions'
	}).then(function successCallback(response){
		$scope.listQuestion = response.data; 
		//console.log($scope.listQuestion);
	}, function errorCallback(response){
		alert("No data yet");
	});

	

	$scope.select = function(id){
		$http.get('http://192.168.10.1:3000/select_question?id='+id).then(function(resp){console.log(resp);});
	}

}]);