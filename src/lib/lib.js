var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');

  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };



/*
  @function checkNumber
  @param { Array } arr
*/
export function checkNumber(arr) {
  for(var i = 0; i < arr.length; i++) {
    if(typeof arr[i] !== 'number') {
      console.error(arr[i], ' is not a number!')
    }
  }
}

//array functions

/*
  @function shift
  @param { Array } arr
  @returns { Array } new Array
*/

export function shift(arr) {
  var newArr = arr.slice()
  newArr.shift()
  return newArr;
}

/*
  @function map
  @param { Array } arr
  @param { Function } cb
  @returns { Array } new Array
*/

export function map (arr, cb){
  var newArray = arr;

  for(var i = 0; i<arr.length; i++){
    newArray[i] = cb(newArray[i])
  }
  return newArray;
}

/*
  @function filter
  @param { Array } arr
  @param { Function } cb
  @returns { Array } new Array
*/

export function filterOld(arr, cb) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i]) === true) {
       newArray.push(arr[i])
    }
  }
  return newArr;
}


/*
  @function filter
  @param { Array } arr
  @param { Function } cb
  @returns { Array } new Array
*/
export function filter(arr, cb) {
  function recursiveFilter(arr, cb, arr2){
    if(arr.length === 0) {
      return arr2;
    } 

    if(cb(arr[0])){
      arr2.push(arr[0])
    }
    
    return recursiveFilter(shift(arr), cb, arr2)
  }

  return recursiveFilter(arr, cb, []);
}

/*
  @function reduce
  @param { Array } arr
  @param { Function  } applyFunc
  @param { any } initialValue
  @returns { any }
*/

export function reduce(arr, applyFunc, initialValue) {
  if (arr.length === 0) {
    return initialValue;
  } else if (typeof initialValue === "undefined") {
    return reduce(shift(arr), applyFunc, arr[0]);
  } else if (initialValue) {
    return reduce(shift(arr), applyFunc, applyFunc(initialValue, arr[0]));
  }
}



export function reduceOld(arr, cb, initialValue) {
  var prevValue = null;

  for(var i = 0; i<arr.length; i++) {
    if(i === 0 && initialValue) {
      prevValue = cb(initialValue, arr[i])
    } else if(i < arr.length - 1){
      prevValue = cb(arr[i], arr[i+1])
    }
  }

  return prevValue;
}


/* Object functions */

export function assoc(obj, key, val) {
  let newObj = {};
  newObj[key] = val;
  return Object.assign(newObj, obj)
}



/* Primitive math functions */

export function divide(a, b){
  checkIsNumber([a, b])
  return (a / b)
}

export function add(a, b)  {
  checkIsNumber([a, b])
  return a + b;
}

export function multiply(a, b){
  checkIsNumber([a, b])
  return a * b;
}

export function minus(a, b){
  checkIsNumber([a, b])
  return a - b
}





