export function assert(testFunc, args, expectedValue) {
  var value = testFunc.apply(null, args);
  if (value === expectedValue) {
    console.log('this works!')
  } else {
    console.error('The function \'' + testFunc.name + '\' bombed hard! It expected ' + expectedValue + ' but got ' + value + ' instead, idiot.')
  }
}

export function logCorrect() {
  console.log('this works!')
}

export function logError(testFunc, value, expectedValue){
  console.log('error');
  // console.error('The function \'' + testFunc.name + '\' bombed hard! It expected ' + expectedValue + ' but got ' + value + ' instead, idiot.')
}

export function assertEquals(testFuncValue, expectedValue) {
  if (testFuncValue === expectedValue) {
    logCorrect()
  } else {
    logError() //assertEquals.caller.toString(), testFuncValue, expectedValue)
  }
}