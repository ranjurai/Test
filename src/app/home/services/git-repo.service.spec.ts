import { TestBed } from '@angular/core/testing';

import { GitRepoService } from './git-repo.service';

describe('GitRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitRepoService = TestBed.get(GitRepoService);
    expect(service).toBeTruthy();
  });
});
