Feature: Mcdonald home page
  @mcdonald @test1
  Scenario: Customer is displayed with Mcdonald Order page
    Given I am on the McDonald page
    When I click on "OrderNow"
    Then I should see "McdApplmage"