var myApp = angular.module('myApp', ['zingchart-angularjs']);


myApp.controller('MainController',function($scope,$window, $http,$timeout){
	
var url = "https://cse5335-sxy6902.herokuapp.com/getData";
//$window.alert(url);

$scope.getData = function(){
	
	$http.get(url)
	.success(function(response) {

		var d = "";
		var e = "";

		$scope.person = response;

		angular.forEach($scope.person,function(data){
			d += data.name; 
			e += data.marks; 
		
		
		});

	//	$window.alert(e);

		   $scope.myJson = {
				      type : "bar",
				      title:{
				        backgroundColor : "transparent",
				        fontColor :"black",
				        text : "graph"
				      },
				      backgroundColor : "white",
				      series : [
				        {
				          values : [e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11]],
				          backgroundColor : "#4DC0CF"
				        }
				      ]
				    };
		   $scope.location= function(data1,data2)
			{
				$window.alert(data1+","+data2);
			
			}
		 
		
	});
 

}

	
});