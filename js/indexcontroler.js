'use strict';

var blogIndexApp = angular.module("blogvtecl",[]);

blogIndexApp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{');
	$interpolateProvider.endSymbol('}]}');
});

blogIndexApp.controller('IndexController',function ($scope, $http){
		
	function sortTags(datatags){
		var cache = {};
		var redondTags = [];
		var k = 0;
		for(var i = 0, maxData = datatags.length;i<maxData;i++){
			var tags = datatags[i].split(' ');
			for(var j = 0, maxTags = tags.length;j<maxTags;j++){
				redondTags[k] = tags[j];
				k++;
			}
		}
		return redondTags.filter(function(elem,index,array){
			return cache[elem]?0:cache[elem]=1;
		});
	}
	
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
	
	function getMonths(datamonths){
		var redondMonths = [];
		var k = 0;
		redondMonths[k] = datamonths[0];
		k++;
		for(var i = 1, maxData = datamonths.length;i<maxData;i++){
			var splitedDate = datamonths[i].split(' ');
			if(splitedDate.length>0){
				redondMonths[k] = splitedDate[1];
				k++;
			}
		}
		var cache = {};
		return redondMonths.filter(function(elem,index,array){
			return cache[elem]?0:cache[elem]=1;
		});
	}
	
	$http.get('./data/posts.json').success(function(data){
		$scope.posts = getPosts(data.posts);
		$scope.tags = sortTags(data.tags);
		$scope.months = getMonths(data.months);
		$scope.selectedTag = $scope.tags[0];
		$scope.selectedMonth = 'all';
	});
	
	$scope.isConcerned = function(post){
		if($scope.selectedTag != 'all'){
			if(post.tags.split(' ').indexOf($scope.selectedTag)<0){return false;}
		}
		if ($scope.selectedMonth != 'all'){
			var postMonth = post.date.split(' ');
			if(postMonth[1] != $scope.selectedMonth){return false;}
		}
		return true;
	};
});