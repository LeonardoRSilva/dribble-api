'use strict';

angular.module('myApp')
 .directive('btCardNormal', function () {
  return {

    scope: {
      shots: '=',
      cardSize: '=',
      search: '=',
      image: '@'
    },

    template: '<div class="card-deck">\n' +
    '      <div class="card text-right" ng-repeat="shot in shots |  filter: search" ng-class="cardSize">\n' +
    '        <img class="card-img-top" ng-if="cardSize == \'card-normal\'" src="{{shot.images.normal}}" alt="Card image cap">\n' +
    '        <img class="card-img-top" ng-if="cardSize == \'card-hidpi\'" src="{{shot.images.hidpi}}" alt="Card image cap">\n' +
    '        <img class="card-img-top" ng-if="cardSize == \'card-teaser\'" src="{{shot.images.teaser}}" alt="Card image cap">\n' +
    '        <div class="card-body">\n' +
    '          <hr>\n' +
    '\n' +
    '          <p class="card-text"><small class="text-muted" ><i class="fa fa-eye" aria-hidden="true"></i>\n' +
    '            {{shot.views_count}} <i class="fa fa-comment" aria-hidden="true"></i>\n' +
    '            {{shot.comments_count}} <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>\n' +
    '            {{shot.likes_count}}</span></small></p>\n' +
    '        </div>\n' +
    '        <div class="card-footer text-left">\n' +
    '          <small class="text-muted ">\n' +
    '            <img src="{{shot.user.avatar_url}}" class="  " alt="..." style="width: 3rem;  -webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;">\n' +
    '            <span ng-bind="shot.user.name"></span>\n' +
    '          </small>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '\n' +
    '    </div>'


  }
 }).directive('btHeader', function () {
      return {

        scope: {
          teaser: '&',
          hidpi: '&',
          normal: '&'
        },

        template: '<header role="banner" class="bg-primary text-center">\n' +
        '  <h1 class="text-center">Projeto - Dribble api</h1>\n' +
        '  <button type="button" class="btn btn-primary active display-button"  ng-click="normal(card-normal)"  autocomplete="off">\n' +
        '    <i class="fa fa-square" aria-hidden="true"></i>\n' +

        '\n' +
        '\n' +
        '  </button>\n' +
        '  <button type="button" class="btn btn-primary active display-button"  ng-click="teaser(card-teaser)" autocomplete="off">\n' +
        '    <i class="fa fa-th-large" aria-hidden="true"></i>\n' +
        '  </button>\n' +
        '  <button type="button" class="btn btn-primary active display-button"  ng-click="hidpi(card-hidpi)"  autocomplete="off">\n' +
        '    <i class="fa fa-th" aria-hidden="true" ></i>\n' +
        '\n' +
        '\n' +
        '  </button>\n' +
        '\n' +
        '</header>'


      }
});
