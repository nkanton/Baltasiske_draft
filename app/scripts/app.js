"use strict";

angular.module('baltasiske', ['ui.router','ngResource','ngDialog','ngMap'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                }

            })
        
            // route for the aboutus page
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        
            // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'                  
                    }
                }
            })

            // route for the menu page
            .state('app.products', {
                url: 'products',
                views: {
                    'content@': {
                        templateUrl : 'views/products.html',
                        controller  : 'ProductsController'
                    }
                }
            });

//            // route for the dishdetail page
//            .state('app.dishdetails', {
//                url: 'menu/:id',
//                views: {
//                    'content@': {
//                        templateUrl : 'views/dishdetail.html',
//                        controller  : 'DishDetailController'
//                   }
//                }
//            })
//        
//            // route for the dishdetail page
//            .state('app.favorites', {
//                url: 'favorites',
//                views: {
//                    'content@': {
//                        templateUrl : 'views/favorites.html',
//                        controller  : 'FavoriteController'
//                   }
//                }
//            });
    
        $urlRouterProvider.otherwise('/');
    })
;
