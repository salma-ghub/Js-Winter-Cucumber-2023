Feature: SignUp form

  Background: 
    When I click on the "Sign In" link
    And I click on the "Sign Up" link

  Scenario: Verify error message for invalid data in SignUp form
    And I enter an invalid email address with at least '@' symbol #!@###
    And I click on the Continue button
    Then I verify the error is displayed (Enter a valid email.)
    And I verify the "Continue" button is enabled

  Scenario: Verify Terms And Conditions link and Privacy Statements link open correct page on new tab
    And I click on the "Terms and Conditions" link
    Then I verify "Terms and Conditions" page opens in new tab
    # And I verify "Last revised" date format expected format: MM/dd/yy
    When I click on the "Privacy Statement" link
    Then I verify the "Privacy Statement" page opens in new tab
   
    
   
