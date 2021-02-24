const given = require('./functions')

/**
 * All the steps related to the Resource definition
 *
 * @module Given
*/

module.exports = [

  /**
   *  Format:
   *  ['Step definition', function handler, 'description','Tags']
   *
   *  Example:
   *  ['I do {int} + {int}', add, 'Calculate an addition', 'add, calculator, additional']
   *
   */

  /**
    * ### Given I have my cluster
    * Initialize the cluster request
    *
    * @category Host
    *
    * @example
    * Given I have my cluster
    *
    *
    * @function cluster
    */
  ['I have my cluster', given.cluster, 'Create a cluster instance', 'cluster'],

  /**
    * ### Given I filter the label {string}
    * Filter the resource using labels
    *
    * @category Labels
    *
    * @example
    * Given I filter the label "type=frontend"
    *
    *
    * @function label
    */
  ['I filter the label {string}', given.labels, 'Filter the resource using a label', 'cluster, label'],

  /**
    * ### Given I have the {string} resource
    * Select the resource to select
    *
    * @category resource
    *
    * @example
    * Given I have the "deployments" resource
    *
    *
    * @function resource
    */
  ['I have the {string} resource', given.resource, 'Select the resource to use', 'cluster, reosource'],
]
