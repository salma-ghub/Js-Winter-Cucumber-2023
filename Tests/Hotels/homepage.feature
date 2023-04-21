Feature: Homepage

  Background: 
    When I click on Travelers

  Scenario: Verify Child-age dropdowns are same as number of Children selected
    And I select "Children" as 2
    Then I verify Children-age dropdown are 2
    And I verify Plus-button is enabled
    And I verify minus-button is enabled
    When I select "Children" as 6
    Then I verify Children-age dropdown are 6
    And I verify Plus button is disabled
    And I verify minus-button is enabled
    When I select "Children" as 5
    Then I verify Children-age dropdown are 5
    And I verify Plus button is enabled
    And I verify minus-button is enabled
    When I select "Children" as 0
    Then I verify Children-age dropdown is NOT displayed
    And I verify Plus button is enabled
    And I verify minus-button is disabled

  Scenario: Verify user can update number of guests on Home page
    And I select "Adults" as 6
    And I select "Children" as 3
    And I select the first child age as 4
    And I select the second child age as "Under 1"
    And I select the third child age as 7
    And I click "Done"
    Then I verify the total number of Travelers is correct after selecting Adults and Children
