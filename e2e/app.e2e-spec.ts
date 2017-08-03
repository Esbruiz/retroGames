import { RetroGamessPage } from './app.po';

describe('retro-gamess App', () => {
  let page: RetroGamessPage;

  beforeEach(() => {
    page = new RetroGamessPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
