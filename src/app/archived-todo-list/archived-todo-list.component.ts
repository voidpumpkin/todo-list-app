import { Component, OnInit } from '@angular/core';
import {ArchivedTodoListService} from '../services/archived-todo-list.service';

@Component({
  selector: 'app-archived-todo-list',
  templateUrl: './archived-todo-list.component.html',
  styleUrls: ['./archived-todo-list.component.css']
})
export class ArchivedTodoListComponent implements OnInit {

  todoItemArchivedList;

  constructor(private archivedTodoListService: ArchivedTodoListService) { }

  ngOnInit() {
    this.getTodoItemList();
  }

  getTodoItemList(){
    this.archivedTodoListService.getTodoList()
    .then(data => {
      console.log(data);
      this.todoItemArchivedList = data;
    });
  }

}
