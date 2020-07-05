'use strict';

/**
 * joins strings in an array into a single string
 *  each entry is separated by a new line
 * @param {Array.string} arrOfStrings - an array containing only strings
 * @returns {string} the string, repeated
 */
const combineStrings = (arrOfStrings) => {
  let allValues = '';
  for (let string of arrOfStrings) {
    allValues += string + '\n';
  }
  return allValues;
};



// test the function
const assert = chai.assert;

describe('combineStrings takes an array of strings and makes one string', () => {
  it('empty arrays return an empty string', () => {
    const expect = '';
    const actual = combineStrings([]);
    assert.strictEqual(actual, expect);
  });
  it('an array of empty strings returns only new lines', () => {
    const expect = '\n\n\n';
    const actual = combineStrings(['', '', '']);
    assert.strictEqual(actual, expect);
  });
  it('works with 5 non-empty strings', () => {
    const expect = 'a\nb\nc\nd\ne\n';
    const actual = combineStrings(['a', 'b', 'c', 'd', 'e']);
    assert.strictEqual(actual, expect);
  });
  it('works with mixed empty and non-empty strings', () => {
    const expect = 'a\n\nc\n\ne\n';
    const actual = combineStrings(['a', '', 'c', '', 'e']);
    assert.strictEqual(actual, expect);
  });
});




// allow users to interact with the function
const displayValuesHandler = () => {
  debugger;

  console.log('-- action: display values --');
  console.log('inputsArray:', typeof inputsArray, '\n', inputsArray);

  const stringToDisplay = combineStrings(inputsArray);
  console.log('stringToDisplay:', typeof stringToDisplay, '\n', stringToDisplay);

  alert(stringToDisplay);
};
