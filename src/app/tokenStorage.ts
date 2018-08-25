import { Injectable } from '@angular/core';
const TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorage {

  constructor() { }

  signIn(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  signOut() {
    window.localStorage.removeItem(TOKEN_KEY);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  setRole(role: string): void {
    window.localStorage.setItem('role', role);
  }

  getRole(): string {
    return localStorage.getItem('role');
  }

  setUserID(userId: string): void {
    window.localStorage.setItem('userId', userId);
  }

  getUserID(): string {
    return localStorage.getItem('userId');
  }

}


