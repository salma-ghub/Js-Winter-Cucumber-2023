class RewardsPage {


    // locators of webElements on RewardsPage

    #feedbackLnk = '=Feedback';
    #submitBtn = '#submit-button'
    #anyRating = '#page-rating-3'
    #errorMessage = 'p*=information highlighted b';
    #redDottedLine = '//fieldset[@id="required_box_page_rating"]';
    #starRating3 = 'label[for=page-rating-3]';
    #pageCommentBox = '//textarea[contains(@placeholder, "Please enter")]';
    #howLikelyToReturnToHotel = '#will-you-return';
    #priorVisit = 'label[for=booked-here-before-yes]';
    #accomplishedTask = 'span=Yes';
    #thankYouFeedback = 'h5=THANK YOU FOR YOUR FEEDBACK.'

    // Functions to interact with elements on RewardsPage

    async clickFeedbackLink() {
        await $(this.#feedbackLnk).waitForDisplayed();
        await $(this.#feedbackLnk).click();
    }


    async clickSubmitBtn() {
        await $(this.#submitBtn).waitForDisplayed();
        await $(this.#submitBtn).click();
    }


    async isRedDottedLineDisplayed() {
        await $(this.#redDottedLine).waitForDisplayed();
        return await $(this.#redDottedLine).isDisplayed();
    }

    async selectAnyStarRating() {
        await $(this.#star3locator).click();
    }

    async isErrorMessageDisplayed() {
        await $(this.#errorMessage).waitForDisplayed();
        return await $(this.#errorMessage).isDisplayed();
    }

    async enterComments() {
        await $(this.#pageCommentBox).setValue('Hotel is nice');
    }     

    async returnToHotel(){
        await $(this.#howLikelyToReturnToHotel).selectByText('Highly likely')
    }

    async yesPriorVisit() {
        await $(this.#priorVisit).click();
    }

    async taskAccomplished() {
        await $(this.#accomplishedTask).click();
    }

    async isFeedbackDisplayed() {
        await $(this.#thankYouFeedback).waitForDisplayed();
        return await $(this.#thankYouFeedback).isDisplayed();
    }
    
 
}
module.exports = RewardsPage;