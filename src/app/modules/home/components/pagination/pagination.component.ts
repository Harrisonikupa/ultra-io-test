import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, DoCheck {
  @Input() paginatedData: any;
  @Output() offset: any = new EventEmitter<any>();

  pageIndex: number = 1;
  contentSize: number = 9;
  currentOffset: any = 0;
  pagination: any = {};

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.paginatedData != undefined) {
      this.pagination = this.paginatedData;
    }
  }

  // override when a search has been made
  pageIndexChange(value: number): void {
    const calculatedOffset = (value - 1) * this.pagination?.count;
    this.offset.emit(calculatedOffset);
  }
}
