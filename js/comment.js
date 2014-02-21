'use strict';


angular.module('commentApp',['commentApp.config','commentApp.service.firebase','commentApp.controllers'])
	.config(function($interpolateProvider){
		$interpolateProvider.startSymbol('{[{');
		$interpolateProvider.endSymbol('}]}');
	});
