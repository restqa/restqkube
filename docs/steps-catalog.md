## Modules

<dl>
<dt><a href="#module_Given">Given</a></dt>
<dd><p>All the steps related to the Resource definition</p>
</dd>
<dt><a href="#module_When">When</a></dt>
<dd><p>All the steps related to the cluster trigger</p>
</dd>
<dt><a href="#module_Then">Then</a></dt>
<dd><p>All the steps related to the Cluster resource check</p>
</dd>
</dl>

<a name="module_Given"></a>
All the steps related to the Resource definition


* [Given](#module_Given)
    * _Host_
        * [~cluster()](#module_Given..cluster)
    * _Labels_
        * [~label()](#module_Given..label)
    * _resource_
        * [~resource()](#module_Given..resource)

<a name="module_Given..cluster"></a>
### Given I have my cluster
Initialize the cluster request

**Category**: Host  
**Example**  
```js
Given I have my cluster
```
<a name="module_Given..label"></a>
### Given I filter the label {string}
Filter the resource using labels

**Category**: Labels  
**Example**  
```js
Given I filter the label "type=frontend"
```
<a name="module_Given..resource"></a>
### Given I have the {string} resource
Select the resource to select

**Category**: resource  
**Example**  
```js
Given I have the "deployments" resource
```
<a name="module_When"></a>
All the steps related to the cluster trigger

<a name="module_When..resources"></a>
### When i get the namespace
Trigger the action fetching the resources

**Category**: Resources  
**Example**  
```js
When I get the resources
```
<a name="module_Then"></a>
All the steps related to the Cluster resource check

