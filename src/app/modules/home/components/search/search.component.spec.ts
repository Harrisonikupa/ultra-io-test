import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { GiphyService } from '../../services/giphy.service';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let element: DebugElement;
  let giphyService: GiphyService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [SharedModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        giphyService = TestBed.inject(GiphyService);
      });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });
});
