const when = require('./functions')

/**
 * All the steps related to the cluster trigger
 *
 * @module When
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
    * ### When i get the namespace
    * Trigger the action fetching the resources
    *
    * @category Resources
    *
    * @example
    * When I get the resources
    *
    *
    * @function resources
    */
  ['I get the resources', when.resources, 'Retrieve the cluster resources', 'cluster, resources'],
]

