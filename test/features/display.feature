Feature: Display Page

Scenario: Verify if the users are displayed.

Given: I click profiles in http://localhost:4000
Then: "Profiles" title appears
And: "Edit User" title appears
And: "Delete this User" button appears
