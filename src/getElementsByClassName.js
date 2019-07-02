// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  let output = [];
  let element = Array.from(document.childNodes);
  let args = [...arguments];

  if (args.length > 1) {
    element = args[1].childNodes;
  }

  for (let i = 0; i < element.length; i++) {
    let hasClassName = typeof element[i].className === 'string';
    if (hasClassName && element[i].className.includes(className)) {
      output.push(element[i]);
    }
    if (element[i].hasChildNodes()) {
      output = output.concat(getElementsByClassName(className, element[i]));
    }
  }
  return output;
};
