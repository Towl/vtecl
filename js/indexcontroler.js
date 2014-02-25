'use strict';

var blogIndexApp = angular.module("blogvtecl",[]);

blogIndexApp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
});

blogIndexApp.controller('IndexController',function ($scope, $http){
		
	function getPosts(dataposts){
		var posts = [];
		var k = 0;
		for(var i = 0, maxPosts = dataposts.length;i<maxPosts;i++){
			if(dataposts[i].title.length > 0){
				posts[k] = dataposts[i];
				k++;
			}
		}
		return posts;
	}
	
	function getTags(datatags){
		var redondTags = [];
		for(var i = 0, maxData = datatags.length;i<maxData;i++){
			redondTags[i] = {
				name:datatags[i],
				checked:true};
		}
		var cache = {};
		return redondTags.filter(function(elem,index,array){
			return cache[elem.name]?0:cache[elem.name]=1;
		});
	}
	
	function getMonths(datamonths){
		var redondMonths = [];
		for(var i = 0, maxData = datamonths.length;i<maxData;i++){
			redondMonths[i] = {
				name:datamonths[i],
				checked:true};
		}
		var cache = {};
		return redondMonths.filter(function(elem,index,array){
			return cache[elem.name]?0:cache[elem.name]=1;
		});
	}
	
	$http.get('./data/posts.json').success(function(data){
		$scope.posts = getPosts(data.posts);
		$scope.tags = getTags(data.tags);
		$scope.months = getMonths(data.months);
		$scope.selectedMonth = 'all';
	});
	
	function isTagged(tags){
		for(var i = 0, nbTags = $scope.tags.length; i < nbTags; i++){
			if($scope.tags[i].checked){
				if(tags.contains($scope.tags[i].name)){return true;}
			}
		}
		return false;
	}
	
	function isInDate(date){
		for(var i = 0, nbMonths = $scope.months.length; i < nbMonths; i++){
			if($scope.months[i].checked){
				if(date.indexOf($scope.months[i])){return true;}
			}
		}
	}
	
	$scope.isConcerned = function(post){
		if(!isTagged(post.tags)){return false;}
		if(!isInDate(post.date)){return false;}
		return true;
	};
});