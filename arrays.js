var chocolateBars =["snickers","hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, n){
  var array
  array.unshift(n)
  return array
}

function addElementToBeginningOfArray(array, n){
  var array
  array=[n, ...array]
  return array
}
