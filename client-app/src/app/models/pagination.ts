export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export class PaginatedResult<T> {
  date: T;
  pagination: Pagination;

  constructor(data: T, pagination: Pagination) {
    this.date = data;
    this.pagination = pagination;
  }
}