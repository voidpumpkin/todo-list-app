import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchivedTodoListService {
  
  constructor(private http: HttpClient) { }

  getArchivedTodoList(){
    return this.http
    .get('http://www.patogusauksas.lt:8090/todoList/archived')
    .toPromise()
    .catch((error: any) => {
      console.log('getArchivedTodoList catch error');
    });
  }
}
