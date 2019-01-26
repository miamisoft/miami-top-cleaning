import { ContactUsModule } from './contactus.module';

describe('ContactUsModule', () => {
  let contactUsModule: ContactUsModule;

  beforeEach(() => {
    contactUsModule = new ContactUsModule();
  });

  it('should create an instance', () => {
    expect(contactUsModule).toBeTruthy();
  });
});
