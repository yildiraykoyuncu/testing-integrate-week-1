'use strict';

const pushToArrayHandler = () => {
  debugger;
  console.log('-- action: push to array --');
  console.log('inputsArray (before):', typeof inputsArray, '\n', inputsArray);

  const newInput = prompt('input some text to save');
  console.log('newInput:', typeof newInput, '\n', newInput);

  if (newInput === null) {
    // leave the handler, there's nothing to do!
    return;
  }

  // push the new value into the shared array
  inputsArray.push(newInput);


  console.log('inputsArray (after):', typeof inputsArray, '\n', inputsArray);

  displayValuesHandler();

};
