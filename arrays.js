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

function  addElementToEndOfArray(array,n){
  var array
  array=[...array,n]
  return array
}

function destructivelyAddElementToEndOfArray(array,n){
  var array
  array.push(n)
  return array
}