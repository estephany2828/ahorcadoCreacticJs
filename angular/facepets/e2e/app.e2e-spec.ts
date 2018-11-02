import { FacepetsPage } from './app.po';

describe('facepets App', function() {
  let page: FacepetsPage;

  beforeEach(() => {
    page = new FacepetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
