import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../pages/auth/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  private usersSubject = new BehaviorSubject<User[]>([]);

  users$ = this.usersSubject.asObservable();

  getUsers() {
    return this.usersSubject.value;
  }

  addUser(user: User) {
    const updated = [...this.usersSubject.value, user];
    this.usersSubject.next(updated);
  }

  removeUser(id: string) {
    const filtered = this.usersSubject.value.filter((u) => u.id !== id);
    this.usersSubject.next(filtered);
  }
}
