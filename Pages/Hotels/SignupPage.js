class SignupPage {

    // Locators of elements on Signup page

    #emailField = 'input[type=email]';
    #continueBtn = 'button=Continue';
    #invalidEmailError = 'div=Enter a valid email.'

    //'#loginFormEmailInput-error';

    #termsAndConditionsLnk = '=Terms and Conditions';
    #lastRevisedDateLocator = 'span=Last revised: 01/01/23';
    #privacyStatementLnk = '//div[@class="CallToAction"]/following-sibling::div//div//ul//li[2]//a';

    
    // Functions to interact with elements on Signup page

    async enterEmail(signinEmail) {
        await $(this.#emailField).setValue(signinEmail);
    }

    async clickContinueBtn() {
        await $(this.#continueBtn).waitForEnabled();
        await $(this.#continueBtn).click();
       
    }

    async isEmailErrDisplayed(invalidEmailErr) {
        await $(this.#invalidEmailError).waitForDisplayed();
        const emailErrText = await $(this.#invalidEmailError).getText();
        return await emailErrText.localeCompare(invalidEmailErr) === 0;
    }


    async isContinueBtnEnbld() {
        return await $(this.#continueBtn).isEnabled();
    }
    async clickTermsAndConditionLnk() {
        await $(this.#termsAndConditionsLnk).click();
    }

    async switchToNewTab() {
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[handles.length - 1]);
    }
    
    async isDateInCorrectFormat(correctDateFormat) {
        const lastRevisedDateText = await this.#lastRevisedDateLocator.getText();
        let dateSubstring = lastRevisedDateText.substring(14);  
        let dateFormatted = dateSubstring.format(correctDateFormat);
        return await dateSubstring.localeCompare(dateFormatted) === 0
    }

    async clickPrivacyStatementLnk() {
        await $(this.#privacyStatementLnk).waitForDisplayed();
        await $(this.#privacyStatementLnk).click();
    }
}
module.exports = SignupPage;