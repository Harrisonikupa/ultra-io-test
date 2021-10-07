import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { async, of, Subscription } from 'rxjs';
import { IMAGES } from 'src/app/shared/common/mock-data';
import { PaginatedRequest } from 'src/app/shared/models/paginated-request.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { GiphyService } from '../../services/giphy.service';

import { ImagesComponent } from './images.component';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;
  let element: DebugElement;
  let giphyService: GiphyService;
  let mockData = IMAGES;
  beforeEach(async () => {
    // const giphyServiceSpy = jasmine.createSpyObj('GiphyService', [
    //   'searchImages',
    //   'getTrendingImages',
    //   'getImages'
    // ]);
    await TestBed.configureTestingModule({
      declarations: [ImagesComponent],
      imports: [SharedModule],
      // providers: [{ provide: GiphyService, useValue: giphyServiceSpy }],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ImagesComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        giphyService = TestBed.inject(GiphyService);
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should should display minimum of 1 and maximum of 9 images', fakeAsync(() => {
    const paginationRequest: PaginatedRequest = {
      limit: 9,
      offset: 0,
    };

    spyOn(giphyService, 'getImages').and.returnValue(of(IMAGES));
    const images = element.queryAll(By.css('.image-column'));
    console.log(images.length);
  }));
});
