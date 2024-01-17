import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWinnerCountComponent } from './player-winner-count.component';

describe('PlayerWinnerCountComponent', () => {
  let component: PlayerWinnerCountComponent;
  let fixture: ComponentFixture<PlayerWinnerCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerWinnerCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerWinnerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
