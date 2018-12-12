import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ArchivedTodoListComponent } from './archived-todo-list/archived-todo-list.component';
import { CreateTodoItemComponent } from './create-todo-item/create-todo-item.component';
import { SideBarComponent } from './side-bar/side-bar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ArchivedTodoListComponent,
    CreateTodoItemComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
