import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor(private http: HttpClient) {}

  list(): any {
    return this.http.get('https://ponyracer.ninja-squad.com/api/races?status=PENDING');
  }
}
