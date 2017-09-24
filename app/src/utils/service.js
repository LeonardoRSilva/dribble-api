'use strict';

angular.module('myApp')
  .service('HttpRequestSrv', function($http) {
  return function(url, method, data, callback) {
    let requestParams = {
      method: method,
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: data
    };

    $http(requestParams).then(
      function successCallback(response) {
        callback('ok',response.data);
      },
      function errorCallback(response) {
        if(response.data !== null){



          callback('error',response.data);
        }
      });
  };
})
  .service('RestSrv', function(HttpRequestSrv) {
    let restFactory = {};

    // Find all data.
    restFactory.find = function(url, callback) {
      new HttpRequestSrv(url, 'GET', {}, callback);
    };


    // Add a new data.
    restFactory.add = function(url, data, callback) {
      new HttpRequestSrv(url, 'POST', data, callback);
    };

    // Edit a data.
    restFactory.edit = function(url, data, callback) {
      new HttpRequestSrv(url, 'PUT', data, callback);
    };

    // Delete a data.
    restFactory.delete = function(url, data, callback) {
      new HttpRequestSrv(url, 'DELETE', data, callback);
    };

    return restFactory;
  })
