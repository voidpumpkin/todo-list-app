import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ArchivedTodoListComponent } from './archived-todo-list/archived-todo-list.component';
import { CreateTodoItemComponent } from './create-todo-item/create-todo-item.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ArchivedTodoListComponent,
    CreateTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
