'use strict';

angular.module('myApp')
.controller('HomeCtrl', function ($scope,RestSrv,SERVICE_PATH)  {
 /* https://api.dribbble.com/v1/shots/?access_token=46e1917748f877de2fba2133d0ce959ffc5dfe9479359ec044383a69bde9cda2*/
  let dribbleUrl =  SERVICE_PATH.ROOT_PATH + '?access_token=46e1917748f877de2fba2133d0ce959ffc5dfe9479359ec044383a69bde9cda2';

    $scope.cardSize = 'card-teaser';
    $scope.shots = [];



    $scope.editCard = function(card){
      console.log(card);
      $scope.cardSize = card;
    }

    RestSrv.find(dribbleUrl, function(status,data) {
      $scope.shots = data;
      console.log(data);

    });
});
