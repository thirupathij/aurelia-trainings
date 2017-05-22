import {Todo} from './todo';

export class App {
  constructor() {
    this.heading = "Todos";
    this.todos = [];
    this.todoDescription = '';
    this.todoTitle = '';    
  }

  addTodo() {
    if (this.todoDescription !== '' && this.todoTitle !== '') {      
      this.todos.push(new Todo(this.todoTitle, this.todoDescription));
      this.todoDescription = '';
      this.todoTitle = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  showDesc(todo){
    let index = this.todos.indexOf(todo);
    this.todos[index].showDesc = true;
  }
}