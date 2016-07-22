app.controller('tableController',['$scope','$http',function($scope,$http){
	
	$scope.database = [];
	$http({
		method:'GET',
		url: 'http://192.168.10.1:3000/submissions'
	}).then(function successCallback(response){
		$scope.database = response.data; 
	}, function errorCallback(response){
		alert("Cant get response");
	});
}]);