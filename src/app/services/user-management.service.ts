import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user";
import {TokenStorage} from "../tokenStorage";

@Injectable()
export class UserManagementService {

  constructor(private tokenStorage: TokenStorage,
              private http: HttpClient) { }


  changeUserPassword(oldPassword: string, password: string, matchingPassword: string, userId: string): Observable<User>{

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const passwordDTO = {'oldPassword' : oldPassword, 'password' : password, 'matchingPassword': matchingPassword};

    return this.http.put<User>('http://localhost:8080/api/user/' + userId + '/changePassword', passwordDTO, httpOptions);
  }


  login(username: string, password: string): Observable<any> {
    const credentials = {username: username, password: password};
    this.tokenStorage.signOut();
    return this.http.post<any>('http://localhost:8080/api/user/login', credentials);
  }

  getUser(): Observable<User> {
    return this.http.get<User>('http://localhost:8080/api/user/get');
  }

}
