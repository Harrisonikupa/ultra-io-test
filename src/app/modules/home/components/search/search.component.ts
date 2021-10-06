import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PaginatedRequest } from 'src/app/shared/models/paginated-request.model';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchResponse: any = new EventEmitter<any>();
  input: any;
  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {}

  search(): void {
    const model: PaginatedRequest = {
      limit: 9,
      offset: 1,
    };
    if (this.input != undefined) {
      this.giphyService.searchImages(this.input, model);
    } else {
      console.log('return a dialog');
    }
  }
}
