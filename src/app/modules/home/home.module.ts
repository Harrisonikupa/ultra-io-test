import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './components/search/search.component';
import { ImagesComponent } from './components/images/images.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [SearchComponent, ImagesComponent, PaginationComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
