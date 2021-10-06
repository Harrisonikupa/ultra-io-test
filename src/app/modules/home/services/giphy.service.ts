import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaginatedRequest } from 'src/app/shared/models/paginated-request.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  baseUrl: string = environment.baseUrl;
  apiKey: string = environment.apiKey;
  gifSubject = new BehaviorSubject<any>([]);
  isSearchingSubject = new BehaviorSubject<any>(false);

  constructor(private http: HttpClient) {}

  getTrendingImages(request: PaginatedRequest) {
    return this.http
      .get(
        `${this.baseUrl}trending?api_key=${this.apiKey}&limit=${request.limit}&offset=${request.offset}`
      )
      .subscribe((response: any) => {
        if (response?.meta?.status == 200 && response?.data?.length > 0) {
          this.gifSubject.next(response);
        } else {
          this.gifSubject.next([]);
        }
      });
  }

  searchImages(input: string, request: PaginatedRequest) {
    return this.http
      .get(
        `${this.baseUrl}search?q=${input}&api_key=${this.apiKey}&limit=${request.limit}&offset=${request.offset}`
      )
      .subscribe((response: any) => {
        this.isSearchingSubject.next(true);
        if (response?.meta?.status == 200 && response?.data?.length > 0) {
          this.gifSubject.next(response);
        } else {
          this.gifSubject.next([]);
        }
      });
  }

  getImages(): Observable<any> {
    return this.gifSubject.asObservable();
  }

  getSearchingStatus(): Observable<any> {
    return this.isSearchingSubject.asObservable();
  }
}
