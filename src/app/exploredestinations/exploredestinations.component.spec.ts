import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploredestinationsComponent } from './exploredestinations.component';

describe('ExploredestinationsComponent', () => {
  let component: ExploredestinationsComponent;
  let fixture: ComponentFixture<ExploredestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploredestinationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploredestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
