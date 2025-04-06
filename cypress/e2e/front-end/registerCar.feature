#utf-8
#language: en

Feature: registerCar - Successful Registration
    Scenario: Successful registration validation
        Given I access the car registration page
        When I fill all inputs with valid data
        Then I validate that the registration was successful