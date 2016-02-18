/* */ 
"format cjs";
import arrayMap from './_arrayMap';
import baseIteratee from './_baseIteratee';
import baseMap from './_baseMap';
import baseSortBy from './_baseSortBy';
import compareMultiple from './_compareMultiple';

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1,
      toIteratee = baseIteratee;

  iteratees = arrayMap(iteratees.length ? iteratees : Array(1), function(iteratee) {
    return toIteratee(iteratee);
  });

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

export default baseOrderBy;
