import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(login: string, password: string, birthYear: number): Observable<UserModel> {
    const body = {
      login: login,
      password: password,
      birthYear: birthYear
    };

    return this.http.post<UserModel>('https://ponyracer.ninja-squad.com/api/users', body);
  }
}
