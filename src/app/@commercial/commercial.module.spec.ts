import { CommercialModule } from './commercial.module';

describe('CommercialModule', () => {
  let commercialModule: CommercialModule;

  beforeEach(() => {
    commercialModule = new CommercialModule();
  });

  it('should create an instance', () => {
    expect(commercialModule).toBeTruthy();
  });
});
