import { Component } from '@angular/core';
import {
  debounce,
  distinctUntilChanged,
  map,
  Observable,
  of,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import { User } from '../models/models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  filter: string = '';
  selectedOption: LookupOption | undefined;

  private createItemToOptionMapper = (item: User): LookupOption => ({
    ['displayName']: item.name,
    ['id']: item.id.toString(),
  });

  private mapResponseToOptions = (items: User[]) =>
    items.map<LookupOption>((item) => this.createItemToOptionMapper(item));

  typeaheadFormatter = (option: LookupOption) => option['displayName']!;

  search = (text$: Observable<string>): Observable<LookupOption[]> =>
    text$
      ? text$.pipe(
          debounce((text) => timer(text.length ? 300 : 0)),
          distinctUntilChanged(),
          tap((text) => (this.filter = text)),
          switchMap((_) =>
            this.service.getUsers({
              skipCount: 0,
              maxResultCount: 10,
              filter: this.filter,
            })
          ),
          map(this.mapResponseToOptions)
        )
      : of([]);

  constructor(private service: UserService) {}
}

type LookupOption = Record<string, string>;
