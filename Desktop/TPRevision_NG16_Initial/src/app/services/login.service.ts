import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modal/user';

const URL = 'http://localhost:3000/logins';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly http:HttpClient = inject(HttpClient);

  // get all logins
  getAllLogins():Observable<User[]> {
    return this.http.get<User[]>(URL);
  }
}
