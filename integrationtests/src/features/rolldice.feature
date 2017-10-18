Feature:
    Roll the dice
Scenario:
    Given I open the url "http://localhost:3000"
    When I click on the button "button[type='submit']"
    Then I expect the url to contain "contact_confirm"
