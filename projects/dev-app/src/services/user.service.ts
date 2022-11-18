import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { LookupRequestDto, User } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private cachedUsers!: Observable<User[]>;

  constructor(private httpClient: HttpClient) {}

  getUsers = (input: LookupRequestDto) => {
    if (!this.cachedUsers) {
      this.cachedUsers = this.httpClient
        .request<User[]>(
          'GET',
          'https://62242cc43af069a0f9b03561.mockapi.io/api/users'
        )
        .pipe(shareReplay(1));
    }

    return this.cachedUsers.pipe(
      map((users) =>
        input.filter
          ? users.filter(
              (user) => user.name.toLowerCase().indexOf(input.filter || '') > -1
            )
          : users
      ),
      map((users) => users.slice(input.skipCount, input.maxResultCount))
    );
  };
}
