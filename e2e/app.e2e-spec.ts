import { MyCrudPage } from './app.po';

describe('my-crud App', () => {
  let page: MyCrudPage;

  beforeEach(() => {
    page = new MyCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
