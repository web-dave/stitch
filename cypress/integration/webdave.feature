

Feature: webdave.de start Page

  I want to open webdaves Page

  @focus
  Scenario: Opening the page
    Given I open the fancy page
    Then I see "@webdave_de" in the title
    And  I see "Berlin, Munich, Hamburg and Essen" in the title
    And Find a img