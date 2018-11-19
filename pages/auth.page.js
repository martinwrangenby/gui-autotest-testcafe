import { Selector, t } from 'testcafe';

export default class AuthPage {
  constructor () {
    this.selectors = {
      inputField: {
        email: Selector('[uid="signUpOrLoginModal__email__input"]'),
        password : Selector('[uid="signUpOrLoginModal__password__input"]'),
      },
      button: {
        createAccount: Selector('[uid="signUpOrLoginModal__signUpOrLogin__button"]'),
        acceptTerms: Selector('[uid="auth__terms__accept__button"]'),
      },
    };
  }

  async enterCredentialsAndLogin (credentials) {
    await t
      .typeText(this.selectors.inputField.email , credentials.email, { replace: true })
      .typeText(this.selectors.inputField.password, credentials.password, { replace: true })
      .click(this.selectors.button.createAccount);
  }

  async clickAcceptTerms() {
    await t.click(this.selectors.button.acceptTerms);
  }
  
  async isContinueButtonDisabled() {
    return this.selectors.button.createAccount.hasAttribute('disabled');
  }
}
