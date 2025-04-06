#utf-8
#language: en

Feature: registerCar - Validation for Empty Fields
    Scenario: Display error messages when no fields are filled
        Given I access the car registration page
        When I try to proceed filling some inputs with invalid data
        Then I should see descriptive error message next to the input
