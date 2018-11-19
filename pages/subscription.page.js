import { Selector, t } from 'testcafe';

export default class SubscriptionPage {
  constructor () {
    this.selectors = {
      button: {
        annualPlan: Selector('[uid="subscription__plan__YEAR__button"]'),
        chooseSubscription: Selector('button[color="shamrock"] .button-inner'),
        cancelSubscription: Selector('button[tmd="cancel-pending-subscription-title"]'),
        confirmSubscriptioncancellation: Selector('button[ion-button="alert-button"]', {index:1}),
        thermometer: {
          yes: Selector('button[color="grape"]',  {index: 0}),
          no: Selector('button[color="grape"]',  {index: 1}),
        },
      },
    };
  }

  async clickChooseSubscription() {
    await t.click(this.selectors.button.chooseSubscription);
  }

  async clickAnnualPlan() {
    await t.click(this.selectors.button.annualPlan);
  }

  async addThermometer(choice) {
    await t.click(this.selectors.button.thermometer[choice]);
  }

  async cancelSubscription() {
    await t
      .click(this.selectors.button.cancelSubscription)
      .click(this.selectors.button.confirmSubscriptioncancellation);
    await this.selectors.button.chooseSubscription.visible;
  }
}
