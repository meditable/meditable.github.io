app.service('answerList',['$http',function($http){
		
	this.getArticle = function($scope){ // มีส่งค่า scope เข้ามา เพื่อกำหนด ค่า model
        var url="http://localhost:8080"; // url ไฟล์ json
        // ดึงข้อมูลจากไฟล์ json ด้วย  service $http โดยใช้คำสั่ง jsonp
        $http.jsonp(url).success(function(result){ // ถ้าสำเร็จ ส่งกลับค่า result
            alert("ok");
            $scope.articles = result; // นำผลลัพธ์ที่ได้ เก็บไว้ในตัวแปร model
        })
        .error(function(){
	        alert("Nooo");
        });
    }
}]);