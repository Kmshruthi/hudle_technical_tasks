
@all
Feature:Login feature
    Background:
        Given I have navigated to the Hudl website

    Scenario Outline: Check all the possible examples of login
            And user logs in through <Email>
            And enter the password <Password>
        Then should see the message <message>

        Examples:
            | Email                 | Password    | message            |
            | kmshruthi99@gmail.com | test@Hudl22 | unsuccessful_login |
            | kmshruthi99@gmail.com | test@Hudl2  | unsuccessful_login |
            | kmshruthigmail.com    | test@Hudl2  | unsuccessful_login |
            | kmshruthi@gmail.com   | test@Hudl22 | successful_login   |
