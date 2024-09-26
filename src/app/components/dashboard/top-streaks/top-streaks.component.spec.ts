import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStreaksComponent } from './top-streaks.component';

describe('TopStreaksComponent', () => {
  let component: TopStreaksComponent;
  let fixture: ComponentFixture<TopStreaksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopStreaksComponent]
    });
    fixture = TestBed.createComponent(TopStreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
