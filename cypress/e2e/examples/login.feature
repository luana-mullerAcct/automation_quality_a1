Feature: Login

    Scenario: Given in the forms input fields 
        Given I access homepage
        When I access Login page
        When type in the wrong username and password and click submit
        Then the error message should be displayed