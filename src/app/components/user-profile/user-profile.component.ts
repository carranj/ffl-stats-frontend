// src/app/components/user/user.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user[0];
    });
  }
}
