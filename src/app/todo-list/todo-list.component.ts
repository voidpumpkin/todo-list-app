import { Component, OnInit } from '@angular/core';
import {TodoListService} from '../services/todo-list.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItemList;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.getTodoItemList();
  }

  getTodoItemList(){
    this.todoListService.getTodoList()
    .then(data => {
      this.todoItemList = data;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoItemList, event.previousIndex, event.currentIndex);
  }

}
