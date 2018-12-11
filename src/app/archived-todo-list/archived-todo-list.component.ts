import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../services/todo-list.service';

@Component({
  selector: 'app-archived-todo-list',
  templateUrl: './archived-todo-list.component.html',
  styleUrls: ['./archived-todo-list.component.css']
})
export class ArchivedTodoListComponent implements OnInit {

  todoItemArchivedList;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.getTodoItemList();
  }

  getTodoItemList(){
    this.todoListService.getTodoList()
    .then(data => {
      console.log(data);
      this.todoItemArchivedList = data;
    });
  }

}
