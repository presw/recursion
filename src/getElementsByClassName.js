// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {

  // First iteration:
  if (typeof className === 'string') {
    let domArray = Array.from(document.body.childNodes);
    let recObj = {
      output: [],
      find: className,
      array: domArray
    };
    return getElementsByClassName(recObj);
  }

  // Later recursions
  for (let i = 0; i < className.array.length; i++) {
    if (typeof className.array[i].className === 'string' && className.array[i].className.includes(className.find)) {
      className.output.push(className.array[i]);
    }
    if (className.array[i].hasChildNodes()) {
      let passObj = {
        output: [],
        array: Array.from(className.array[i].childNodes),
        find: className.find
      }
      className.output = className.output.concat(getElementsByClassName(passObj));
    }
  }
  return className.output;
};
