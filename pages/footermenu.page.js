import { Selector, t } from 'testcafe';

export default class FooterMenu {
  constructor () {
    this.selectors = {
      button: {
        profile: Selector('a').withText('Profile'),
      },
    };
  }

  async navigateToProfile () {
    await t
      .click(this.selectors.button.profile);
  }
}