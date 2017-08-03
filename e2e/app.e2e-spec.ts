import { UploadPage } from './app.po';

describe('upload App', function() {
  let page: UploadPage;

  beforeEach(() => {
    page = new UploadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
