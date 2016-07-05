
angular.
  module('countryList').
  component('countryList',{
    templateUrl:'components/countrylist.template.html',
    controller:['$scope','$http',
      function($scope,$http){
        console.log("controller started");
        $scope.list;
         $scope.state = [];

        $http.get('details/country.json').then(function(response){
           $scope.data = response.data;
           $scope.list= response.data;


            console.log("debugger"+$scope.list.length);
            for(var i=0;i<$scope.list.length;i++){
                $scope.state.push($scope.list[i].country);
            }
            return $scope.state;
        });

        $scope.start = function(){
              $scope.selected ;
              console.log($scope.state.length);
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

      }]
  });
