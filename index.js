
var myApp = angular.module("angularTypeahead", ["ui.bootstrap"]);

myApp.controller("TypeaheadCtrl",["$scope","$http", function($scope,$http) {
  console.log("controller started");
  $scope.list;
  $http.get('country.json').then(function(response){
     $scope.data = response.data;
     $scope.list= response.data;
     $scope.state = [];

      console.log("debugger"+$scope.list.length);
    for(var i=0;i<$scope.list.length;i++){
      $scope.state.push($scope.list[i].country);

    }
    });
    $scope.start = function(){
    $scope.selected ;
    if($scope.selected != ""){
      for(var j=0;j<$scope.state.length;j++){
        if($scope.selected == $scope.list[j].country){
          console.log($scope.list[j].country+"and code is:"+$scope.list[j].countrycode);
          $scope.countries_code = $scope.list[j].countrycode;
          console.log($scope.countries_code);
          break;
        }
      }
    }
    $scope.states = $scope.state;


  };

}]);
