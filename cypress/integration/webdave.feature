

Feature: webdave.de start Page

  I want to open webdaves Page
  
  @focus
  Scenario: Opening the page
    Given I open the page
    Then I see "@webdave_de" in the title