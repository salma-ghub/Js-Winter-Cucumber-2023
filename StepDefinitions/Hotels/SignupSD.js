const { Given, When, Then} = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require('../../Pages/Hotels/Homepage');
const SignupPage = require('../../Pages/Hotels/SignupPage');


const homepage = new Homepage();
const signUpPage = new SignupPage();



Given(/^I am on Hotels.com$/, async function () {
    await browser.url('https://www.hotels.com');
});
    
When(/^I click on the "Sign In" link$/, async function () {
    await homepage.clickSignInLnk();
});
    
When(/^I click on the "Sign Up" link$/, async function () {
    await homepage.clickSignUpLnk();
});
    
When(/^I enter an invalid email address with at least '@' symbol (.+$)/, async function (invalidEmail) {
    await signUpPage.enterEmail(invalidEmail);
});

When(/^I click on the Continue button$/, async function () {
    await signUpPage.clickContinueBtn();
    await browser.pause(3000);
});
    
Then(/^I verify the error is displayed (.+)$/, async function (invalidEmailErr) {
    expect(signUpPage.isEmailErrDisplayed(invalidEmailErr), 'Email error is not displayed.').to.be.true;
});

 
Then(/^I verify the "Continue" button is enabled$/, async function () {
    expect(await signUpPage.isContinueBtnEnbld(), 'Continue button is not enabled').to.be.true;
});
    
    
When(/^I click on the "Terms and Conditions" link$/, async function () {
    await signUpPage.clickTermsAndConditionLnk();
    await browser.pause(2000);
});
    
Then(/^I verify "Terms and Conditions" page opens in new tab$/, async function() {
    await signUpPage.switchToNewTab();
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'Terms and Conditions does not open in a new tab').to.equal(2);   
  });
    

Then(/^I verify "Last revised" date format (expected format: .+)$/, async function (correctDateFormat) {
    expect(signUpPage.isDateInCorrectFormat, 'Last revised date is not in correct format').to.be.true;                 
 });

When(/^I click on the "Privacy Statement" link$/, async function () {
    await signUpPage.clickPrivacyStatementLnk();
    await browser.pause(5000);
});
    
Then(/^I verify the "Privacy Statement" page opens in new tab$/, async function () {
    const allHandles = await browser.getWindowHandles();
    expect(allHandles.length, 'Privacy Statement does not open in a new tab').to.equal(3);   
});