const { Given, When, Then} = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const Homepage = require('../../Pages/Hotels/Homepage');
const SignupPage = require('../../Pages/Hotels/SignupPage');
const RewardsPage = require('../../Pages/Hotels/RewardsPage');


const homepage = new Homepage();
const signUpPage = new SignupPage();
const rewardsPage = new RewardsPage();


When(/^I click on the "Feedback" link$/, async function () {
    await rewardsPage.clickFeedbackLink();
});

When(/^I click on the "Submit" button$/, async function () {
    await rewardsPage.clickSubmitBtn();
});

Then(/^I verify the red-dotted line is displayed around the star-section$/, async function() {
    const dottedRedLine = await rewardsPage.isRedDottedLineDisplayed();
    expect(dottedRedLine, 'Red-dotted line is not displayed').to.be.true;
});

Then(/^I verify the error message is displayed (Please fill in the required information highlighted below.)$/, async function() {
    const displayedErrorMessage = await rewardsPage.isErrorMessageDisplayed();
    expect(displayedErrorMessage, 'The error message is not displayed').to.be.true;
});   

When(/^I select any star-rating$/, async function () {
    await rewardsPage.selectAnyStarRating();
}); 

When(/^I enter any comments$/, async function () {
    await rewardsPage.enterComments();
});

When(/^I select any option for "How likely are you to return to Hotels.com?"$/, async function () {
    await rewardsPage.returnToHotel();
});

When(/^I select any answer for "Prior to this visit, have you ever booked on Hotels.com?"$/, async function () {
    await rewardsPage.yesPriorVisit();
});

When(/^I select any answer for "Did you accomplish what you wanted to do on this page?"$/, async function () {
    await rewardsPage.taskAccomplished();
});

When(/^I verify that "THANK YOU FOR YOUR FEEDBACK." is displayed$/, async function () {
    const displayedFeedback = await rewardsPage.isFeedbackDisplayed();
    expect(displayedFeedback, 'feedback is not displayed').to.be.true;
});
