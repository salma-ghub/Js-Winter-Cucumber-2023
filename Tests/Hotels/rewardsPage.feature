Feature: Rewardspage

  Background:
    When I click on the "Sign In" link
    And I click on the "Feedback" link

  Scenario: Verify error is displayed when user submits the empty feedback form

    And I click on the "Submit" button
    Then I verify the error message is displayed (Please fill in the required information highlighted below.)
    And I verify the red-dotted line is displayed around the star-section

  Scenario: Verify user can submit feedback after completing the feedback form

    And I select any star-rating
    And I enter any comments
    And I select any option for "How likely are you to return to Hotels.com?"
    And I select any answer for "Prior to this visit, have you ever booked on Hotels.com?"
    And I select any answer for "Did you accomplish what you wanted to do on this page?"
    And I click on the "Submit" button
    Then I verify that "THANK YOU FOR YOUR FEEDBACK." is displayed
