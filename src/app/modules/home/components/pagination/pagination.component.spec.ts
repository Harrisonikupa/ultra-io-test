import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let element: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [SharedModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
        fixture.detectChanges();
      });
  });

  it('should create pagination component', () => {
    expect(component).toBeTruthy();
  });

  it('paginated data length should be greater than or equal to zero', () => {
    const pagination: any = (component.pagination = {});
    fixture.autoDetectChanges();
    const countText = element.query(By.css('.ant-pagination'));

    // expect(pagination.total_count).toBeGreaterThanOrEqual(0);
  });

  it('should emit offset value on change of pagination', () => {});
});
