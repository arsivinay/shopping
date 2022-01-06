import { ComponentFixture, TestBed } from '@angular/core/testing';

import { item } from './items';

describe('ItemDescriptionComponent', () => {
  let component: item;
  let fixture: ComponentFixture<item>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ item ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(item);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
