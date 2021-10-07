import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { PaginatedRequest } from 'src/app/shared/models/paginated-request.model';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit, OnChanges, OnDestroy {
  @Output() paginatedData: any = new EventEmitter<any>();
  @Input() offset: any = 1;
  @Input() searchQuery: any = '';
  isSearching: boolean = false;
  request: PaginatedRequest = {
    limit: 9,
    offset: 1,
  };
  images: any[] = [];
  subscription: Subscription | undefined;
  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.request.offset = this.offset;
    this.giphyService.getSearchingStatus().subscribe((response: any) => {
      this.isSearching = response;
    });
    if (this.isSearching) {
      this.getImagesBySearch(this.request, this.searchQuery);
    } else {
      this.getTrendingImages(this.request);
    }
  }

  getTrendingImages(request: PaginatedRequest): void {
    this.giphyService.getTrendingImages(request);
    this.subscription = this.giphyService
      .getImages()
      .subscribe((response: any) => {
        this.images = response?.data;
        this.paginatedData.emit(response?.pagination);
      });
  }

  getImagesBySearch(request: PaginatedRequest, query: string): void {
    this.giphyService.searchImages(query, request);
    this.subscription = this.giphyService
      .getImages()
      .subscribe((response: any) => {
        this.images = response?.data;
        this.paginatedData.emit(response?.pagination);
      });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
