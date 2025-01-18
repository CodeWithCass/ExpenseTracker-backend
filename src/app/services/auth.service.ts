import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  async signup(name: string, email: string, password: string) {
    return axios.post(`${this.apiUrl}/signup`, { name, email, password });
  }

  async login(email: string, password: string) {
    return axios.post(`${this.apiUrl}/login`, { email, password });
  }
}
