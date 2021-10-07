import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { GiphyService } from './giphy.service';
import { PaginatedRequest } from 'src/app/shared/models/paginated-request.model';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('GiphyService', () => {
  let giphyService: GiphyService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GiphyService],
    });
    giphyService = TestBed.inject(GiphyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create the service', () => {
    expect(giphyService).toBeTruthy();
  });

  it('should retrieve trending gifs and stickers', () => {
    const paginationRequest: PaginatedRequest = {
      limit: 9,
      offset: 0,
    };

    giphyService.getTrendingImages(paginationRequest);
    giphyService.getImages().subscribe((response: any) => {
      expect(response).toBeTruthy();
    });

    const request = httpTestingController.expectOne(
      (request: any) =>
        request.url ==
        `${environment.baseUrl}trending?api_key=${environment.apiKey}&limit=${paginationRequest.limit}&offset=${paginationRequest.offset}`
    );

    expect(request.request.method).toEqual('GET');
    request.flush({});
  });

  it('should retrieve gifs and stickers based on search parameters', () => {
    const paginationRequest: PaginatedRequest = {
      limit: 9,
      offset: 0,
    };
    const searchQuery: string = 'happy';

    giphyService.searchImages(searchQuery, paginationRequest);
    giphyService.getImages().subscribe((response: any) => {
      expect(response).toBeTruthy();
    });

    const request = httpTestingController.expectOne(
      (request: any) =>
        request.url ==
        `${environment.baseUrl}search?q=${searchQuery}&api_key=${environment.apiKey}&limit=${paginationRequest.limit}&offset=${paginationRequest.offset}`
    );

    expect(request.request.method).toEqual('GET');
    // put mock data model later
    request.flush({});
  });

  afterEach(() => {
    // means only the http request specified is called by the service
    httpTestingController.verify();
  });
});
