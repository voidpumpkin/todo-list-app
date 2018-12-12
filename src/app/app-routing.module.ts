import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent} from './todo-list/todo-list.component'
import { ArchivedTodoListComponent} from './archived-todo-list/archived-todo-list.component'

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
    path: 'archive',
    component: ArchivedTodoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
