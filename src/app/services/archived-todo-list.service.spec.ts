import { TestBed } from '@angular/core/testing';

import { ArchivedTodoListService } from './archived-todo-list.service';

describe('ArchivedTodoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivedTodoListService = TestBed.get(ArchivedTodoListService);
    expect(service).toBeTruthy();
  });
});
