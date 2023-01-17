Feature: As a customer, I am able to view Kohls home page and access the option,login and placve order

  @kohls @ktest1

  Scenario: Customer is displayed with Kohla page and able to navigate to my clearance page
    Given I am on the kohls page
    When I click on "shopbycategory"
    And I click on "clearance"
    Then I should see "clearancetxt"

#  @kohls @ktest2
#       Scenario: Customer is displayed with mcdonalds home page and tries to login into the portal
#     Given I am on the mcdonald page
#     When I click on "signin"
#     And I enter the inputs for login
#       | InputName | InputValue  |
#       | username  | johndoe     |
#       | password  | password123 |
#     And I click on "LoginBtn"
#     Then I should see "errorMessage"