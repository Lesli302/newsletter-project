import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSubmissionComponent } from './newsletter-submission.component';

describe('NewsletterSubmissionComponent', () => {
  let component: NewsletterSubmissionComponent;
  let fixture: ComponentFixture<NewsletterSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
