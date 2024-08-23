Feature: Addition
  In order to perform roman numeral arithmetics
  As a developer
  I want to add two roman numbers together
 
  Scenario: basic addition
    Given I have the number "I"
    When I add it to the number "I"
    Then the result should be the number "II"
