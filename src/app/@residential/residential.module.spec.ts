import { ResidentialModule } from './residential.module';

describe('ResidentialModule', () => {
  let residentialModule: ResidentialModule;

  beforeEach(() => {
    residentialModule = new ResidentialModule();
  });

  it('should create an instance', () => {
    expect(residentialModule).toBeTruthy();
  });
});
