import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.css']
})
export class CreateTodoItemComponent implements OnInit {

  todoItemText = '';

  constructor() { }

  ngOnInit() {
  }

}
