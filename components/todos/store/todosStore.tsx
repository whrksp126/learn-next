import {configure, makeAutoObservable} from 'mobx';
configure({
  enforceActions: 'never',
});

export interface ITodoModel {
  id: number;
  text: string;
  done: boolean;
}

class TodosStore{
  todosList : ITodoModel[] = [];
  todo : ITodoModel = this.resetTodoData();

  resetTodoData(){
    return {
      id: Math.max(0, Math.max(...this.todosList.map(({id}) => id))) + 1,
      text: '',
      done: false,
    };
  }

  constructor(){
    makeAutoObservable(this);
  }

  addTodo(){
    console.log(`myTodo ${this.todo.text}`);
    this.todosList.push(this.todo);
    this.todo = this.resetTodoData();
  }

  deleteTodo =(id: number) => {
    console.log(`todos ${this.todosList}`);
    console.log(`delete id: ${id}`);
    this.todosList = this.todosList.filter((todo) => todo.id !== id);
  } 
}

const todosStore = new TodosStore();
export default todosStore;