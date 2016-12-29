
// Code goes here

(function(){
 
 var app = angular.module('todo', []);
 
 app.controller('TodoCtrl', ['$scope' , function($scope){
   
   $scope.name = 'Chris';
   $scope.todos = [
     {
     title : 'test1',
     completed : false,
     createdAt : Date.now()
     },
     {
     title : 'test2',
     completed : false,
     createdAt : Date.now()
     },
     {
     title : 'test3',
     completed : true,
     createdAt : Date.now()
     }
   ]
   
   $scope.remove = function(todo){
    // find todo index in todos
     var idx = $scope.todos.findIndex(function(item){
       return item.id == todo.id;
     })
     
    // remove from todos
    if (idx = -1){
      $scope.todos.splice(idx,1)
    }
   }
   
 }]);
  
})();