import { Component, Input, OnInit } from '@angular/core';
import {Todo} from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  heading = "saqiasks";

  localItem: string | null;

  todos:Todo[];

  constructor() {
    setTimeout(() => {
      this.heading = "Todo list in Angular Framework"
    }, 3000);

  this.localItem = localStorage.getItem("todos");
    if(this.localItem == null) {

      this.todos = [
        // {
      //   sno: 3,
      //   title: "title",
      //   desc:"description",
      //   active: true
      // },
      // {
        //   sno: 4,
        //   title: "title2",
        //   desc:"description",
        //   active: true
        // },
      // {
        //   sno: 5,
      //   title: "title3",
      //   desc:"description",
      //   active: true
      // },
    ]
  }
  else {
    this.todos = JSON.parse(this.localItem);
  }

  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    //todo ki index
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)

    //jo dlt krta hun usko mien nai save krna hai apni local storage mai ki kis kis ko mien nai dlt krdia 
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  addtodo(todo: Todo) {
    this.todos.push(todo)
    //jo add krta hun usko mien nai save krna hai apni local storage mai ki kis kis ko mien nai add krdia 
    localStorage.setItem('todos', JSON.stringify(this.todos))

  }
}
