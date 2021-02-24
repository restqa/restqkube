const then = require('./functions')

/**
 * All the steps related to the Cluster resource check
 *
 * @module Then
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
    * ### Then I should have {int} namespace(s)
    * Ensure the number of namespace is equal to expected number
    *
    * @category Namespace
    *
    * @example
    * Then I should have 5 namespace(s)
    *
    *
    * @function namespace.length
    */
  ['I should have {int} namespace(s)', then.namespaces.length, 'Check the list of namespaces availables', 'cluster, namespace, number'],



  /**
    * ### Then I should see the namespace {string}
    * Ensure a namespace exiits within the cluster
    *
    * @category Namespace
    *
    * @example
    * Then I should see the namespace "default"
    *
    *
    * @function namespace.contains
    */
  ['I should see the namespace {string}', then.namespaces.contains, 'Check if a specific namespace exists', 'cluster, namespace, length'],
]


