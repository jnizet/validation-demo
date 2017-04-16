import { ValidationDemoPage } from './app.po';

describe('validation-demo App', () => {
  let page: ValidationDemoPage;

  beforeEach(() => {
    page = new ValidationDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
