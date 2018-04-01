//整站模板定义
var TexApp = angular.module('TexApp', ['TexApp']);


//ptextApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
//    $routeProvider
//        .when('/', {
//            templateUrl: 'app/views/ztb_sample/home/index.html',
//            controller: 'HomeCtrl'
//        })
//        .when('/po/:section/:action', {
//            templateUrl: function (rp) {
//                var action = rp.action;
//                var section = rp.section;
//                if (rp.action.toLowerCase() == "add")
//                    action = "edit";
//
//                return 'app/views/po/' + section + '/' + action + '.html';
//            },
//            menu: function (rp) {
//                var action = rp.action;
//                if (rp.action.toLowerCase() == "add")
//                    action = "edit";
//                return action;
//            }
//        });
//    $locationProvider.html5Mode(false);
//}]);
