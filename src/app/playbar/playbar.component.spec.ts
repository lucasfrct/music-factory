import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaybarComponent } from './playbar.component';

describe('PlaybarComponent', () => {
  let component: PlaybarComponent;
  let fixture: ComponentFixture<PlaybarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaybarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
