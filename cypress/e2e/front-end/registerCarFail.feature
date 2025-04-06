#utf-8
#language: en

Feature: registerCar - Validation for Empty Fields
    Scenario: Display error messages when no fields are filled
        Given I access the car registration page
        When I try to proceed without filling any input
        Then I should see descriptive error message
