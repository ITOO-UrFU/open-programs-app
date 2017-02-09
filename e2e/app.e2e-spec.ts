import { OpenProgramsAppPage } from './app.po';

describe('open-programs-app App', function() {
  let page: OpenProgramsAppPage;

  beforeEach(() => {
    page = new OpenProgramsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
