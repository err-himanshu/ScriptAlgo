/*
 Problem  - Find a double that sum to a given value in array
 Input - Array - [12, 3, 4, 1, 6, 9] , SUM - 21
 Output true and values are  12,6
 Best TimeComplexity - O(n)

*/
//**************   Naive solution with O(n^2) complexity      **************//

function naiveSolution(arr,sum){
  //itirate over array twice
  var result =  false;
  for(var i =0; i< arr.length -1; i++){
    for(var j = i+1; j<arr.length;j++ ){
      if(arr[i] + arr[j] === sum){
        result = true;
      }
    }
  }
  return result;
}

//**************   Bit smart solution with O(n(logn)) complexity      **************

function bitSmartApproach(arr,sum){
  //in this approach we first sort the array the iterate only one loop in it
  var result = false;
  arr = arr.sort(function(a,b){return a-b});
  var next = 0;
  var last = arr.length;
  while(next < last){
    if(arr[next] + arr[last] === sum ){
      result = true;
      break;
    }else if(arr[next] + arr[last] < sum){
      next++
    }else{
      last--
    }
  }
  return result
}

//**************    smart solution with O(n) complexity      ************** //

function bestApproach(arr,sum){
  //in this approach we store the value in hash and will iterate over this
  var result = false;
  var found = {}
  for(var i of arr ){
    if(found[sum-i] === true){
      result =  true;
    }else{
      found[i] = true;
    }
  }
  return result
}


console.log(naiveSolution([12, 3, 4, 1, 6, 9],7));

console.log(bitSmartApproach([12, 3, 4, 1, 6, 9],10));

console.log(bestApproach([12, 3, 4, 1, 6, 9],22));
