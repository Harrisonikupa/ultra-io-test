import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any = {};
  selectedOffset: number = 0;
  searchQuery: string = '';
  constructor() {}

  ngOnInit(): void {}
}
