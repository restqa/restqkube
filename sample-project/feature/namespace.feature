Feature: Validate the list of namespace

Scenario: Ensure All the namespace are valid
Given I have my cluster
  And I have the "namespace" resource
When I get the resources
Then I should have 5 namespaces
  And  I should see the namespace "my-test"
  And  I should see the namespace "default"
  And  I should see the namespace "kube-node-lease"
  And  I should see the namespace "kube-public"
  And  I should see the namespace "kube-system"

Scenario: Ensure All the namespace my-test namespace is labeled
Given I have my cluster
  And I have the "namespace" resource
  And I filter the label "foo=bar"
When I get the resources
Then I should have 1 namespaces
  And I should see the namespace "my-test"
