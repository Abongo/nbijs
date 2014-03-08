var app=angular.module("nairobijs",[]);
app.controller("MessageCtrl",function($scope){
	$scope.messages=[];
	/*$scope.message={
		from: "controller"
	}:*/
$scope.addMessage=function(){
	$scope.messages.push($scope.message);
	Message.addMessage($scope.message)
	$scope.message = {};
	};
});
app.directive('superhero',function(){
	return{
		restrict:'E',
		template :'<div>This is Nairobijs</div>'
	};
});