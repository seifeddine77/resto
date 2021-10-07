import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefSpaceComponent } from './chef-space.component';

describe('ChefSpaceComponent', () => {
  let component: ChefSpaceComponent;
  let fixture: ComponentFixture<ChefSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
