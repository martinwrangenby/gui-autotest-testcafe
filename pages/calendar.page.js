import { Selector, t } from 'testcafe';

export default class CalendarPage {
  constructor () {
    this.selectors = {
      popup: {
        container: Selector('.alert-message'),
        okButton: Selector('.alert-button'),
      },
    };
  }

  // This one is a bit of an ugly fix, but the behaviour of this popup was a bit inconsistent so i added this check
  async handlePopup() {
    if(await this.selectors.popup.container.exists) {
      await t.click(this.selectors.popup.okButton);
    }
  }
}
