'use strict'

angular.module('commentApp.controllers',['commentApp.service.firebase','commentApp.config'])
	.controller('CommentCtrl',['$scope','syncData','FirebaseURL',function($scope,syncData,FirebaseURL){
		$scope.newMessage = null;
		$scope.FirebaseURL = FirebaseURL;
		$scope.author = null;
		
		function getNowDate(){
			var now = new Date();
			var thisYear = now.getFullYear();
			var thisMonth = now.getMonth();
			var thisDay = now.getDate();
			var thisHour = now.getHours();
			var thisMinute = now.getMinutes();
			var dateString = thisYear+'-'+thisMonth+'-'+thisDay+' '+thisHour+'h'+thisMinute;
			return dateString;
		};
		$scope.date = getNowDate();
		
		function getFireID(){
			var blockComment = document.getElementById('commentaires');
			var titleTag = blockComment.getElementsByTagName("h3");
			var rawCommentID = titleTag[0].getAttribute('id');
			var commentID = encodeURI(angular.lowercase(rawCommentID));
			return commentID;
		};
		
		$scope.FireID = getFireID();
		$scope.messages = syncData('posts/'+$scope.FireID+'/comments',10);

		$scope.addMessage = function(){
			if( $scope.newMessage && $scope.author ) {
				$scope.messages.$add({date: $scope.date, author: $scope.author, text: $scope.newMessage});
				$scope.newMessage = null;
			}
			else {
				alert('Certains champs sont vides : \nAuteur : '+$scope.author+'\nMessage : '+$scope.newMessage);
			}
		};
	}]);