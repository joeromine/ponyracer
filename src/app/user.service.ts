import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  register(login: string, password: any, birthYear: any) {
    let register = {
      login: login,
      password: password,
      birthYear: birthYear
    };

    return this.http.post('https://ponyracer.ninja-squad.com/api/users', register);
  }
}