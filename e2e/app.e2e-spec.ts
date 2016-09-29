import { DemoNg2Page } from './app.po';

describe('demo-ng2 App', function() {
  let page: DemoNg2Page;

  beforeEach(() => {
    page = new DemoNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
