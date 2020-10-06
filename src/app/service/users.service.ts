import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  };
  getUser(id): Observable<User>{
    return this.http.get<User>(`http://jsonplaceholder.typicode.com/users/${id}`);
  };
  getUserPost(id): Observable<Post[]>{
    return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }
}
