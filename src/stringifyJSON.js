// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var arr = [];
  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
    return "" + obj;
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    for (i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr + ']';

  } else if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    for (let key in obj) {
      if(typeof obj[key] !== 'function' && obj[key] !== undefined) {
        arr.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
      }
    }
    return '{' + arr + '}';
  }
};
