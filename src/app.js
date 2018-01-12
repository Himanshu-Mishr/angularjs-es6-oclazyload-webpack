import angular from 'angular';
import AppRoutes from './configs/app.routes';
import AppController from './controllers';

angular
.module('app', [
  AppRoutes.name,
  AppController.name
]);

