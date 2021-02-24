# Features

In order to undertand better the best way to write scenario, you should first be comfortable with cucumber, take a look at the [cucumber documentation](https://cucumber.io/docs/gherkin/reference/) to fully understand the diifferent definition on the current page.

## Tags

### @skip

Skip the actual scenario

At the Scenario level: 

```gherkin

@skip
Scenario: This Scenario will be skipped
Given I have the api gateway
...
```

At the Feature level: 

```gherkin

@skip
Feature: All the scenario in this feature will be skipped

Scenario: I will be skipped
Given I have the api gateway
...


Scenario: I will be skipped as well
Given I have the api gateway
...
```

### @wip

Define the current scenario as work in progress. (alias @skip)

At the Scenario level: 

```gherkin

@wip
Scenario: This Scenario will be skipped 
Given I have the api gateway
...
```

At the Feature level: 

```gherkin

@wip
Feature: All the scenario in this feature will be skipped

Scenario: I will be skipped
Given I have the api gateway
...


Scenario: I will be skipped as well
Given I have the api gateway
...
```
