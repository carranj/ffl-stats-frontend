// src/app/services/user.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User, UserRole } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  mockUsers: User[] = [
    {
      "userId": 1,
      "username": "josecarranco",
      "password": "hashedpassword1",
      "email": "jose.carranco@example.com",
      "name": "Jose Carranco",
      "role": UserRole.Manager,
      "isActive": true,
      "dateJoined": new Date('2021-01-15T00:00:00Z'),
      "teamName": "Team Jose",
      "profilePictureUrl": "https://example.com/images/jose.jpg",
      "bio": "Fantasy football enthusiast and team manager.",
      "lastActive": new Date('2024-09-14T12:00:00Z')
    }
  ];
  constructor() { }

  getUser(): Observable<User> {
    // Return the first user from the mock data
    return of(this.mockUsers[0]);
  }
}
