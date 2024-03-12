import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextComp } from './text.component';

describe('TextComp', () => {
  let component: TextComp;
  let fixture: ComponentFixture<TextComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextComp],
    }).compileComponents();

    fixture = TestBed.createComponent(TextComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
