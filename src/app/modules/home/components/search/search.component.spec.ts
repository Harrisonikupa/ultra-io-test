import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
      imports: [SharedModule, BrowserAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement;
    giphyService = TestBed.inject(GiphyService);
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when form is empty', () => {
    expect(component.searchForm.valid).toBeFalsy();
  });

  it('should be valid if search query is entered', () => {
    let errors: any = {};
    let searchField = component.searchForm.controls['search'];
    expect(searchField.valid).toBeFalsy();

    // search input field is required
    errors = searchField.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should get trending images if search is not empty', fakeAsync(() => {
    let searchField = component.searchForm.controls['search'];

    // component.checkWhenEmpty(searchField);

    // component.search();

    // fixture.detectChanges();
    // giphyService.getSearchingStatus().subscribe((response: any) => {
    //   console.log(response);
    // })
    // get the api
  }));

  it('should get images based on search parameter', () => {
    let searchField = component.searchForm.controls['search'];
    component.checkWhenEmpty(searchField);
    giphyService.getSearchingStatus().subscribe((value: any) => {
      expect(value).toBeFalsy();
    });
  });

  it('should trigger event emitter when search button is clicked and the form is valid', fakeAsync(() => {
    let searchField = component.searchForm.controls['search'];
    spyOn(component, 'search');
    searchField.setValue('hello');
    expect(searchField.valid).toBeTruthy();
    const searchButton = element.query(By.css('.search-button'));
    searchButton.nativeElement.click();
    tick(1000);
    expect(component.search).toHaveBeenCalled();
  }));
});
