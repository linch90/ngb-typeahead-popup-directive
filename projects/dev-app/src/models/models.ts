export declare class ListResultDto<T> {
  items?: T[];
  constructor(initialValues?: Partial<ListResultDto<T>>);
}

export declare class PagedResultDto<T> extends ListResultDto<T> {
  totalCount?: number;
  constructor(initialValues?: Partial<PagedResultDto<T>>);
}

export declare class LimitedResultRequestDto {
  maxResultCount: number;
  constructor(initialValues?: Partial<LimitedResultRequestDto>);
}

export declare class PagedResultRequestDto extends LimitedResultRequestDto {
  skipCount?: number;
  constructor(initialValues?: Partial<PagedResultRequestDto>);
}

export interface LookupRequestDto extends PagedResultRequestDto {
  filter?: string;
}

export interface User {
  id: number;
  name: string;
  createdAt: Date;
  avatar: string;
}
