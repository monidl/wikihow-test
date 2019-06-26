Feature: visit wikihow website

    @watch
    Scenario: search for how to drink water
        Given user is currently on wikihow website
        When user has searched for drink water and clicked Enter
        When user selects the link
        When user selected description from the article
        Then text is transferred into a txt file