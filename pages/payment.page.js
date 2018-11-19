import { Selector, t } from 'testcafe';

export default class PaymentPage {
  constructor () {
    this.selectors = {
      button: {
        addPayment: Selector('[uid="payment__page__add_payment__method__button"]'),
        cardPayment: Selector('[uid="payment__cards__tab"]', {index: 1}),
        pay: Selector('[uid="payment__pay__button"]'),
        finishPurchase: Selector('[uid="orderPage__finish__button"]'),
        confirmCardRemoval: Selector('.action-sheet-button', {index: 0}),
      },
      inputField: {
        cardNumber: Selector('#credit-card-number'),
        validDate: Selector('#expiration'),
        cvv: Selector('#cvv'),
      },
      iframe: {
        cardNumber: Selector('#braintree-hosted-field-number'),
        validDate: Selector('#braintree-hosted-field-expirationDate'),
        cvv: Selector('#braintree-hosted-field-cvv'),
      },
      paymentCards: {
        visa: Selector('.payment__visa'),
        masterCard: Selector('.payment__master-card'),
      },
      purchaseComplete: Selector('.orderPage__text md'),
    }
  }

  async addPayment() {
    await t.click(this.selectors.button.addPayment);
  }

  async chooseCardPayment () {
    await t
      .click(this.selectors.button.cardPayment);
  }
  async setPaymentCardInfo(paymentCard) {
    await t
    .switchToIframe(this.selectors.iframe.cardNumber)
    .typeText(this.selectors.inputField.cardNumber, paymentCard.number, { replace: true })
    .switchToMainWindow()
    .switchToIframe(this.selectors.iframe.validDate)
    .typeText(this.selectors.inputField.validDate, paymentCard.date, { replace: true })
    .switchToMainWindow()
    .switchToIframe(this.selectors.iframe.cvv)
    .typeText(this.selectors.inputField.cvv, paymentCard.cvv, { replace: true })
    .switchToMainWindow()
    .click(this.selectors.button.pay)
  }
  async getPurchaseConfirmation() {
    return await this.selectors.purchaseComplete.textContent;
  }

  async choosePaymentCardInList(card) {
    await t.click(this.selectors.paymentCards[card]);
  }

  async clickFinishPurchase() {
    await t.click(this.selectors.button.finishPurchase);
  }

  async removeCard(card) {
    await t
      .click(this.selectors.paymentCards[card])
      .click(this.selectors.button.confirmCardRemoval)
      await !this.selectors.paymentCards[card].visible


  }

}


