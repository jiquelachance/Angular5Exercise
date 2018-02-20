import { TestBed, inject } from '@angular/core/testing';

import { AuthenticateService } from './authenticate.service';

import { HttpClientModule } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

describe('AuthenticateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthenticateService]
    });
  });

  it('should be created', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service).toBeTruthy();
  }));
});
