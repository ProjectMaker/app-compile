import { AppCompilePage } from './app.po';

describe('app-compile App', () => {
  let page: AppCompilePage;

  beforeEach(() => {
    page = new AppCompilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
