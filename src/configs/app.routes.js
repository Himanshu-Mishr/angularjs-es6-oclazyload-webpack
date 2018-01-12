import angular from 'angular';
import ngRoute from 'angular-route';
import oclazyload from 'oclazyload';


export default angular
  .module('app.routes', [ngRoute, oclazyload])
  .config(function($routeProvider) {

    $routeProvider
    .when('/home', {
        templateUrl : 'src/views/home.html',
        controller : 'HomeController',
        resolve: {
          loadAppModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure(['../controllers/home.controller.js'], (require) => {
                let mm = require('../controllers/home.controller.js');
                console.log(mm);
                $ocLazyLoad.load({name: mm.default.name});
                resolve(mm.controller);
              });
            })
          }]
        },
      })
    .when('/about', {
        templateUrl : 'src/views/about.html',
        controller : 'AboutController',
        resolve: {
          loadAppModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure(['../controllers/about.controller.js'], (require) => {
                let mm = require('../controllers/about.controller.js');
                $ocLazyLoad.load({name: mm.default.name});
                resolve(mm.controller);
              });
            })
          }]
        },
      })
    .when('/product', {
        templateUrl : 'src/views/product.html',
        controller : 'ProductController',
        resolve: {
          loadAppModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure(['../controllers/product.controller.js'], (require) => {
                let mm = require('../controllers/product.controller.js');
                $ocLazyLoad.load({name: mm.default.name});
                resolve(mm.controller);
              });
            })
          }]
        },
    })
    .when('/career', {
        templateUrl : 'src/views/career.html',
        controller : 'CareerController',
        resolve: {
          loadAppModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
            return $q((resolve) => {
              require.ensure(['../controllers/career.controller.js'], (require) => {
                let mm = require('../controllers/career.controller.js');
                $ocLazyLoad.load({name: mm.default.name});
                resolve(mm.controller);
              });
            })
          }]
        },
      });
  });