
angular.module('commentApp.service.firebase',['firebase'])

	.factory('firebaseRef',['Firebase','FirebaseURL',function(Firebase, FirebaseURL){
		/**
		* @function
		* @name firebaseRef
		* @param {String|Array...} path
		* @return a Firebase instance
		*/
		return function(path){
			return new Firebase(pathRef([FirebaseURL].concat(Array.prototype.slice.call(arguments))));
		}
	}])
	
	.service('syncData', ['$firebase', 'firebaseRef', function($firebase, firebaseRef) {
      /**
       * @function
       * @name syncData
       * @param {String|Array...} path
       * @param {int} [limit]
       * @return a Firebase instance
       */
      return function(path, limit) {
         var ref = firebaseRef(path);
         limit && (ref = ref.limit(limit));
         return $firebase(ref);
      }
   }]);
	
function pathRef(args) {
   for(var i=0; i < args.length; i++) {
      if( typeof(args[i]) === 'object' ) {
         args[i] = pathRef(args[i]);
      }
   }
   return args.join('/');
}