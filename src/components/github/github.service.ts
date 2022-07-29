import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './githubmodels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  
  private URL:string = "https://api.github.com/users/";

  GetUser(name:string): Observable<User>{
    let url:string = this.URL + name;

    return this.MyHttpservice.get<User>(url);
  }

  constructor(private MyHttpservice:HttpClient) { }
}
