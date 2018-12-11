import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItemList;

  constructor() { }

  ngOnInit() {
    this.todoItemList = [
      {
        "id": 0,
        "text": "Buy a mock",
        "creationDate": "2011-01-12T16:55:37.000+0000"
      },
      {
        "id": -99,
        "text": "Mock away",
        "creationDate": "2017-08-10T12:36:38.000+0000"
      }
    ]
  }

}
