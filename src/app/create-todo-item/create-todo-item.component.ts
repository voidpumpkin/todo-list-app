import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../services/todo-list.service';


@Component({
  selector: 'app-create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.css']
})
export class CreateTodoItemComponent implements OnInit {

  todoItemText = '';

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  addNewTodo(){
    if(this.todoItemText != '')
      this.todoListService.addNewTodoItem(this.todoItemText);
  }

}
