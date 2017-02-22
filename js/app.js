var app = angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider)
    {
        $stateProvider
            .state('home', new Route('/', 'about.html'))
            .state('packages', new Route('/packages', 'packages.html', 'packagesCtrl'))
            .state('locations', new Route('/locations', 'locations.html', 'locationsCtrl'))
            .state('booked', new Route('/booked/:id', 'booked.html', 'bookedCtrl'))
            .state('adventures', new Route('/adventurers/', 'adventurers.html', undefined, 'home'))
            .state('contact', new Route('/contact', 'contact.html', undefined, 'home'));

        $urlRouterProvider
            .otherwise('/');
    });

function Route(url, templateUrl, controller, parent)
{
    this.url = url;
    this.templateUrl = 'views/' + templateUrl;
    this.controller = controller;
    this.parent = parent;
}