import { Component, OnInit } from '@angular/core';
import {ArchivedTodoListService} from '../services/archived-todo-list.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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
    this.archivedTodoListService.getArchivedTodoList()
    .then(data => {
      this.todoItemArchivedList = data;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoItemArchivedList, event.previousIndex, event.currentIndex);
  }

}
