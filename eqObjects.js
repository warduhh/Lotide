
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log("Arrays not equal length")
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      // if it is an array && the arrays are not equal then return false;
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
      // if the element is not an array and the items are not equal then return false
      return false;
    }
  } 
  return true;
};





const eqObjects = function(object1, object2) {
  let output = true;
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) output = output && false;
  else for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
    output = output && (eqArrays(object1[key], object2[key]));
    } else if (typeof(object1[key]) === "object" || typeof(object2[key]) === "object") {
      output = output && eqObjects(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) output = output && false;
  }
  return output;
};



  
