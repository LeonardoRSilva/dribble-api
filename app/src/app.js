'use strict';
let BASE_URL = 'https://api.dribbble.com/v1/shots/';
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).constant('SERVICE_PATH', {
  'ROOT_PATH': BASE_URL

});
