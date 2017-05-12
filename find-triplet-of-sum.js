/*
 Problem  - Find a triplet that sum to a given value
 Input - Array - [12, 3, 4, 1, 6, 9] , SUM - 24
 Output true and values are  12,3,9
 Best TimeComplexity - O(n^2)

*/

//**************   Naive solution with O(n^3) complexity      **************//
var result = false;
function naiveFindTriplet(arr,sum){
  for(var i = 0; i< arr.length-2;i++){
    for(var j = i+1; j< arr.length-1;j++){
      for(var k = j+1; k<arr.length;k++){
        if(arr[i] + arr[j] + arr[k] === sum){
          result = true;
        }
      }
    }
  }
  return result;
}

console.log(naiveFindTriplet([12, 3, 4, 1, 6, 9],19))


//************* Solution with O(n^2) complexity *******************//
//first sort the array

function smartFindTriplet(arr,sum){
  var result = false;
  arr  = arr.sort(function(a,b) { return a - b; });
  var next;
  var last;
  for(var i =0; i< arr.length-2;i++){
    next = i+1;
    last = arr.length - 1;
    while(next < last){
        if(arr[i] + arr[next] + arr[last] === sum) {
        	result  = true;
          break;
          } else if (arr[i] + arr[next] + arr[last] < sum){
          	next++;
          } else {
          	last--;
          }
    }
  }
  return result;
}
console.log(smartFindTriplet([12, 3, 4, 1, 6, 9],19));
