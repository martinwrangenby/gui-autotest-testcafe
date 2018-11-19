import { Selector, t } from 'testcafe';

export default class ProfilePage {
  constructor () {
    this.selectors = {
      button: {
        subscription: Selector('[uid="profilePage__subscription__button"]'),
        payment: Selector('[uid="profilePage__paymentMethod__button"]'),
      },
    };
  }

  async clickSubscription () {
    await t
      .click(this.selectors.button.subscription);
  }

  async clickPayment () {
    await t
      .click(this.selectors.button.payment);
  }
}
