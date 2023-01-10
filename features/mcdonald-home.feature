Feature: Mcdonald home page

  @mcdonald @test1
  
  Scenario: Customer is displayed with Mcdonald Order page
    Given I am on the mcdonald page
    When I click on "MyMcdonaldsreward"
    Then I should see "MyMcdonald"