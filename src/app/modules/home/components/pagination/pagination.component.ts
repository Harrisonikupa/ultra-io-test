import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, DoCheck {
  @Input() paginatedData: any;
  @Output() offset: any = new EventEmitter<any>();
  currentOffset: any = 0;

  pagination: any = {};

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.paginatedData != undefined) {
      this.pagination = this.paginatedData;
    }
  }

  pageIndexChange(value: number): void {
    const calculatedOffset = (value - 1) * this.pagination?.count;
    this.offset.emit(calculatedOffset);
  }
}
