import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaginatedRequest } from 'src/app/shared/models/paginated-request.model';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() searchQuery: any = new EventEmitter<any>();
  searchForm!: FormGroup;
  constructor(private giphyService: GiphyService, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: [null, [Validators.required]],
    });
  }

  search(): void {
    const model: PaginatedRequest = {
      limit: 9,
      offset: 1,
    };
    this.submitSearchForm();
    if (this.searchForm.valid) {
      const searchParameter = this.searchForm.value.search;
      this.searchQuery.emit(searchParameter);
      this.giphyService.isSearchingSubject.next(true);
      this.giphyService.searchImages(searchParameter, model);
    }
  }

  submitSearchForm(): void {
    for (const i in this.searchForm.controls) {
      if (this.searchForm.controls.hasOwnProperty(i)) {
        this.searchForm.controls[i].markAsDirty();
        this.searchForm.controls[i].updateValueAndValidity();
      }
    }
  }

  checkWhenEmpty(value: any) {
    if (value.data == null) {
      this.giphyService.isSearchingSubject.next(false);
      this.searchQuery.emit('');
    } else {
      this.giphyService.isSearchingSubject.next(true);
    }
  }
}
