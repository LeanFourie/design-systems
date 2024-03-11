import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularDsComponent } from './angular-ds.component';

describe('AngularDsComponent', () => {
  let component: AngularDsComponent;
  let fixture: ComponentFixture<AngularDsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
