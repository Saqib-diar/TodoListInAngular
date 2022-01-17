import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css']
})
export class TodosItemComponent implements OnInit {


  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); //output krki yi parent comp ko daidia

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo) {
    // alert("hello")
    this.todoDelete.emit(todo)
    console.log("btn is clicked");

    //yaha hm nai todos array ko change karna hai
  }
}
