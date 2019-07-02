// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {

  // First iteration:
  if (typeof className === 'string') {
    let domArray = Array.from(document.childNodes);
    let recObj = {
      output: [],
      find: className,
      array: domArray
    };
    return getElementsByClassName(recObj);
  }

  // Later recursions
  for (let i = 0; i < className.array.length; i++) {
    let element = className.array[i];
    let hasClassName = typeof element.className === 'string';

    if (hasClassName && element.className.includes(className.find)) {
      className.output.push(element);
    }
    if (element.hasChildNodes()) {
      let passObj = {
        output: [],
        find: className.find,
        array: Array.from(element.childNodes)
      }
      className.output = className.output.concat(getElementsByClassName(passObj));
    }
  }
  return className.output;
};
