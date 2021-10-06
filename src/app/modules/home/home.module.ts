import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SearchComponent } from './components/search/search.component';
import { ImagesComponent } from './components/images/images.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';

import {
  EditTwoTone,
  DeleteTwoTone,
  DeleteOutline,
  UploadOutline,
  DownloadOutline,
  FileTwoTone,
  InboxOutline,
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons: IconDefinition[] = [
  EditTwoTone,
  DeleteTwoTone,
  UploadOutline,
  DeleteOutline,
  DownloadOutline,
  FileTwoTone,
  InboxOutline,
];
@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    ImagesComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NzIconModule.forChild(icons),
  ],
})
export class HomeModule {}
