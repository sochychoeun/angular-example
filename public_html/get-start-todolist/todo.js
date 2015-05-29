angular.module('todoApp', [])
        .controller('TodoList', function(){
            var todo = this;
            // set default todolist
            todo.todos = [
                {text: 'Learn AngularJS first todo list', done:true},
                {text: 'Create example app with angularjs', done:false}
            ];
            
            // Count all uncheck checkbox
            todo.remaining = function(){
                var count = 0;
                angular.forEach(todo.todos, function(task){
                    count += !task.done? 1: 0;
                });
                return count;
            }
            
            // Add new task
            todo.addTask = function(){
                todo.todos.push({text: todo.taskText, done: false});
                todo.taskText = '';
            }
            
            // Remove selected tasks
            todo.removeTasks = function(){
                todo.todos =  todo.todos.filter(function(task){
                    return !task.done;
                });
            }
        });