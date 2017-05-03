// Problem Statement -  remove duplicates from an array
// Example - input - [1,2,3,4,4,45,53,3,2]
// Output -  [1,2,3,4,45,53]
// Time Complexity - O(n)
// Space Complexity - O(1) ; constant

  function removeDuplicate(data){
   //first check if given param is an array or not
    if(data instanceof Array){
      //now check for length if less than one return the same
      if(data.length < 2)
        return data;
      else{
        let result = [];
        data.forEach(function(element){
          //now check if result array has the element or not if yes do not push else push into this array
            if(result.indexOf(element) === -1){
              result.push(element);
            }
        });
        return result;
      }
  }else {
    return 'Not a valid array';
  }
}
removeDuplicate([1,2,3,4,4,45,53,3,2]);
//will give output [1,2,3,4,45,53]
