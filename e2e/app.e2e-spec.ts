import { AngularLeanFilterPage } from './app.po';

describe('angular-lean-filter App', () => {
  let page: AngularLeanFilterPage;

  beforeEach(() => {
    page = new AngularLeanFilterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
