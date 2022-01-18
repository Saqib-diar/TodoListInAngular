import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {


  title: string | undefined;
  desc: string | undefined;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); //output krki yi parent comp ko daidia

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo= {
      sno:8,
      title: this.title,
      desc: this.desc,
      active: true
    }

    this.todoAdd.emit(todo)

    // alert("form submited")
    
  }
}