import { Selector, t } from 'testcafe';

export default class IntroPage {
  constructor () {
    this.selectors = {
      button: {
        login: Selector('[uid="introPage__login__button"]'),
      },
    };
  }

  async clickLoginButton () {
    await t
      .click(this.selectors.button.login);
  }
}
