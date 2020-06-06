import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProofContainerComponent } from './social-proof-container.component';

describe('SocialProofContainerComponent', () => {
  let component: SocialProofContainerComponent;
  let fixture: ComponentFixture<SocialProofContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialProofContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialProofContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
