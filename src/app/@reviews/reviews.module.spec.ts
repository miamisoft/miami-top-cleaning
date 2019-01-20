import { ReviewsModule } from './reviews.module';

describe('TeamModule', () => {
  let reviewsModule: ReviewsModule;

  beforeEach(() => {
    reviewsModule = new ReviewsModule();
  });

  it('should create an instance', () => {
    expect(reviewsModule).toBeTruthy();
  });
});
