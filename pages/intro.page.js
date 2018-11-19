import { Selector, t } from 'testcafe';

export default class IntroPage {
  constructor () {
    this.selectors = {
      button: {
        //signup: Selector('[uid="introPage__signUp__button"]'),
        login: Selector('[uid="introPage__login__button"]'),
        //populate: Selector('[uid="introPage__learnMore__button"]'),
      }
    }
  }

  async clickLoginButton () {
    await t
      .click(this.selectors.button.login);
  }
}