import * as testData from '../utils/testData';
import { getPageTitle } from '../utils/helpers';
import IntroPage from '../pages/intro.page';
import AuthPage from '../pages/auth.page';
import CalendarPage from '../pages/calendar.page';
import FooterMenu from '../pages/footermenu.page';
import ProfilePage from '../pages/profile.page';
import SubscriptionPage from '../pages/subscription.page';
import PaymentPage from '../pages/payment.page';

const introPage = new IntroPage;
const authpage = new AuthPage;
const calendarPage = new CalendarPage;
const footerMenu = new FooterMenu;
const profilePage = new ProfilePage;
const subscriptionPage = new SubscriptionPage;
const paymentPage = new PaymentPage;

const loginCredentials = testData.getLoginCredentials();
const userCredentials = testData.getUserCredentials();
const paymentCard = testData.getPaymentCard();

fixture `Setting up annual subscriptions`
  .page `${(testData.getBaseUrl())}`
  .beforeEach(async t => {
    await introPage.clickLoginButton();
    await t.expect(await authpage.isContinueButtonDisabled()).ok('Could not find login button in disabled state on auth page')

    await authpage.enterCredentialsAndLogin(loginCredentials);
    await calendarPage.handlePopup();
  });

  test('Adding a new payment method (Visa card)', async t => {
    await footerMenu.navigateToProfile();
    await t.expect(await getPageTitle(userCredentials.name)).ok(`Did not find expected page title for profile page containing user name: ${userCredentials.name}`)
  
    await profilePage.clickSubscription();
    await t.expect(await getPageTitle('Your subscription')).ok('Did not find expected page title: "Your subscription"')
  
    await subscriptionPage.clickChooseSubscription();
    await t.expect(await getPageTitle('Change subscription')).ok('Did not find expected page title: "Change subscription"')
  
    await subscriptionPage.clickAnnualPlan();
    await subscriptionPage.addThermometer('no');
    await t.expect(await getPageTitle('Payment method')).ok('Did not find expected page title: "Payment method"')
  
    await paymentPage.addPayment();
    await t.expect(await getPageTitle('Add payment method')).ok('Did not find expected page title: "Add payment method"')
    
    await paymentPage.chooseCardPayment();
    await paymentPage.setPaymentCardInfo(paymentCard.visa);
    await paymentPage.choosePaymentCardInList('visa');
    await t.expect(await paymentPage.getPurchaseConfirmation()).eql('Your purchase is complete');
    await paymentPage.clickFinishPurchase();
  })
  .after( async t => {
    await console.log('\t...Cleaning up (removing subscription and added visa card)');
    await footerMenu.navigateToProfile();
    await profilePage.clickSubscription();
    await subscriptionPage.cancelSubscription();
  
    await footerMenu.navigateToProfile();
    // Had to add this two lines below because a page reload was needed for the new card to appear
    await t.expect(await getPageTitle(userCredentials.name)).ok(`Did not find expected page title for profile page containing user name: ${userCredentials.name}`)
    await t.eval(() => location.reload(true));
    await profilePage.clickPayment();
    await paymentPage.removeCard('visa');
  });

  test('Using existing payment method already added (mastercard)', async t => {
    await footerMenu.navigateToProfile();
    await t.expect(await getPageTitle(userCredentials.name)).ok(`Did not find expected page title for profile page containing user name: ${userCredentials.name}`)
  
    await profilePage.clickSubscription();
    await t.expect(await getPageTitle('Your subscription')).ok('Did not find expected page title: "Your subscription"')
  
    await subscriptionPage.clickChooseSubscription();
    await t.expect(await getPageTitle('Change subscription')).ok('Did not find expected page title: "Change subscription"')
  
    await subscriptionPage.clickAnnualPlan();
    await subscriptionPage.addThermometer('no');
    await t.expect(await getPageTitle('Payment method')).ok('Did not find expected page title: "Payment method"')

    await paymentPage.choosePaymentCardInList('masterCard');
    await t.expect(await paymentPage.getPurchaseConfirmation()).eql('Your purchase is complete');
    await paymentPage.clickFinishPurchase();
  })
  .after( async t => {
    await console.log('\t...Cleaning up (removing subscription)');
    await footerMenu.navigateToProfile();
    await profilePage.clickSubscription();
    await subscriptionPage.cancelSubscription();
  });
