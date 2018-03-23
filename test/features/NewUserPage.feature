Feature: New User Page

Scenario: Verify if the new user page is opened on start.

Given: I open http://localhost:4000
Then: "New User" title appears
And: The Input form for the details exists
