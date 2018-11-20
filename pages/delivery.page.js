import { Selector, t } from 'testcafe';

export default class DeliveryPage {
  constructor () {
    this.selectors = {
      inputField: {
        zipCode: Selector('[uid="address__postalCode__input"]'),
        city: Selector('[uid="address__city__input"]'),
        street: Selector('[uid="address__addressOne__input"]'),
        name: Selector('[uid="address__fullName__input"]'),
      },
      button: {
        continueButton: Selector('[uid="deliveryPage__continue__button"]'),
      },
    };
  }

  async setZipCode (address) {
    await t
      .typeText(this.selectors.inputField.zipCode, address.zipCode, { replace: true })
      .click(this.selectors.button.continueButton);
  }

  async setAddress (address) {
    await t
      .typeText(this.selectors.inputField.city, address.city, { replace: true })
      .typeText(this.selectors.inputField.street, address.street, { replace: true })
      .typeText(this.selectors.inputField.name, address.name, { replace: true })
      .click(this.selectors.button.continueButton)
      .wait(1500);
  }
}