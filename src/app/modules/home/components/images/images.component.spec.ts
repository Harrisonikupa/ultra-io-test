import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { spy } from 'cypress/types/sinon';
import { async, of, Subscription } from 'rxjs';
import { IMAGES } from 'src/app/shared/common/mock-data';
import { setupImages } from 'src/app/shared/common/setup-test-data';
import { PaginatedRequest } from 'src/app/shared/models/paginated-request.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { GiphyService } from '../../services/giphy.service';

import { ImagesComponent } from './images.component';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;
  let element: DebugElement;
  let giphyService: any;
  // let mockData = setupImages();
  beforeEach(async () => {
    // const giphyServiceSpy = jasmine.createSpyObj('GiphyService', ['getImages']);
    await TestBed.configureTestingModule({
      declarations: [ImagesComponent],
      imports: [SharedModule],
      providers: [GiphyService],
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

  it('should should display of 9 images', () => {});
});
