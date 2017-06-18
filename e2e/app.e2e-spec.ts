import { LastManPage } from './app.po';

describe('last-man App', () => {
  let page: LastManPage;

  beforeEach(() => {
    page = new LastManPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
