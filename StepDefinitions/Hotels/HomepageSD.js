const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const Homepage = require('../../Pages/Hotels/Homepage');
const Loginpage = require('../../Pages/Hotels/Rewardspage');
const SignupPage = require('../../Pages/Hotels/SignupPage');

const homepage = new Homepage();
const loginpage = new Loginpage();


When(/^I click on Travelers$/, async function () {
  await homepage.clickTravelersBtn();
});

When(/^I select "Children" as 2$/, async function () {
  await homepage.selectChildrenInRoom(2, 1);
});

Then(/^I verify Children-age dropdown are 2$/, async function () {
  await homepage.childrenAgeDropdownCount().selectByVisibleText('2');
  expect(await homepage.childrenAgeDropdownCount.getValue()).to.equal('2');
});

Then(/^I verify Plus-button is enabled$/, async function () {
  const childPlusBtnEnabled = await homepage.isChildPlusBtnEnabled();
  expect(childPlusBtnEnabled, 'Plus-button is not enabled').to.be.true;
});

Then(/^I verify Minus-button is enabled$/, async function () {
  const childMinusBtnEnabled = await homepage.isChildMinusBtnEnabled();
  expect(childMinusBtnEnabled, 'Minus-button is not enabled').to.be.true;
});

Then(/^I select "Children" as 6$/, async function () {
  await homepage.selectChildrenInRoom(6, 1);
});

Then(/^I verify Children-age dropdown are 6$/, async function () {
  await homepage.childrenAgeDropdownCount().selectByVisibleText('6');
  expect(await homepage.childrenAgeDropdownCount.getValue()).to.equal('6');
});

Then(/^I verify Plus-button is disabled$/, async function () {
  const childPlusBtnDisabled = await homepage.isChildPlusBtnDisabled();
  expect(childPlusBtnDisabled, 'Plus-button is not disabled').to.be.true;
});

Then(/^I verify Minus-button is disabled$/, async function () {
  const childMinusBtnDisabled = await homepage.isChildMinusBtnDisabled();
  expect(childMinusBtnDisabled, 'Minus-button is not disabled').to.be.true;
});

When(/^I select "Children" as 5$/, async function () {
  await homepage.selectChildrenInRoom(2, 1);
});

Then(/^I verify Children-age dropdown are 5$/, async function () {
  await homepage.childrenAgeDropdownCount().selectByVisibleText('2');
  expect(await homepage.childrenAgeDropdownCount.getValue()).to.equal('2');
});

When(/^I select "Children" as 0$/, async function () {
  await homepage.selectChildrenInRoom(2, 1);
});

Then(/^I verify Children-age dropdown are 0$/, async function () {
  await homepage.childrenAgeDropdownCount().selectByVisibleText('0');
  expect(await homepage.childrenAgeDropdownCount.getValue()).to.equal('0');
});


