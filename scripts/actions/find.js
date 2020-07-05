'use strict';

/**
 * checks if a value is in an array
 * @param {Array.string} arrOfStrings - an array containing only strings
 * @param {string} toFind - the value to find in the array
 * @returns {boolean} does the value exist or not?
 */
const isItThere = (arrOfStrings, toFind) => {
  let exists = false;
  for (let _ of _) {

  }
  return exists;
};




// test the function (all the tests work!)
const assert = chai.assert;

describe('isItThere checks if a certain string is in an array of strings', () => {
  it('empty arrays return false', () => {
    const expect = false;
    const actual = isItThere([], 'empty!');
    assert.strictEqual(actual, expect);
  });
  it('finds when there is one item', () => {
    const expect = true;
    const actual = isItThere(['the only'], 'the only');
    assert.strictEqual(actual, expect);
  });
  it('finds the first item of many', () => {
    const expect = true;
    const actual = isItThere(['x', '5', '12-0'], 'x');
    assert.strictEqual(actual, expect);
  });
  it('finds the last item of many', () => {
    const expect = true;
    const actual = isItThere(['x', '5', '12-0'], '12-0');
    assert.strictEqual(actual, expect);
  });
  it('does not find missing items', () => {
    const expect = false;
    const actual = isItThere(['x', '5', '12-0'], ':(');
    assert.strictEqual(actual, expect);
  });
  it('can find the empty string', () => {
    const expect = true;
    const actual = isItThere(['x', '', '12-0'], '');
    assert.strictEqual(actual, expect);
  });
});




// allow users to interact with the function
//  (this handler works!)
const findValueHandler = () => {
  debugger;

  console.log('-- action: find value --');
  console.log('inputsArray:', typeof inputsArray, '\n', inputsArray);
  console.log('found (before):', typeof found, '\n', found);

  const toFind = prompt('enter a value to find');
  console.log('toFind:', typeof toFind, '\n', toFind);

  if (toFind === null) {
    // leave the handler, there's nothing to do!
    return;
  }

  const didFind = isItThere(inputsArray, toFind);
  console.log('didFind:', typeof didFind, '\n', didFind);

  if (!didFind) {
    alert(`did not find: \n${toFind}`);
    found = null;
    return;
  }

  found = toFind;

  console.log('found (after):', typeof found, '\n', found);

  displayFoundHandler();
};
