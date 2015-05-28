angular.module('todoApp', [])
        .controller('TodoList', function(){
            var todo = this;
            // set default todolist
            todo.todos = [
                {text: 'Learn AngularJS first todo list', done:true},
                {text: 'Create example app with angularjs', done:false}
            ];
        });