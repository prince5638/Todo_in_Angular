import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

// no need to import the of because here httpClient itself return the observable ... no need to convert the return into an observable
// import { Observable,of } from 'rxjs';
import { Observable } from 'rxjs';

import { Task } from '../Task';

// Now there is no need for this import because we are using an HttpClient for fetching data from api
// import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]>{
    // fetching tasks from the mock-task.ts
    // const tasks = of(TASKS);
    // return tasks;

    // fetching task from an api
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>
  {
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task>
  {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task>
  {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
