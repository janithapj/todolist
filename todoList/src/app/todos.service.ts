import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers =
{
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
}
const apiUrl = 'http://localhost:8001/api/todos';
@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }
  addTodo(data: any) {
    return this.httpClient.put(apiUrl, data,)
  }
  updateTodos(id:any,data: any) {
    return this.httpClient.post(apiUrl, data,)
  }
  getTodos() {
    return this.httpClient.get(apiUrl)
  }
}
