export interface User {
  userId: number;
  username:string;
  password:string;
  email: string;
  name: string;
  role: UserRole;
  isActive: boolean;
  dateJoined?:Date;
  teamName?: string;
  profilePictureUrl?: string;
  bio?: string; 
  lastActive: Date; 
}

export enum UserRole {
  Admin = 'admin',
  User = 'user',
  Commissioner = 'commissioner',
  Manager = 'manager'
}