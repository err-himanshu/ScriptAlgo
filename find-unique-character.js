// Problem statement - Find all the unique character in a string
// Input - 'hello'
//Output - 'heo'
// Time complexity - O(n)

function findUniqueInString(input){
 var i,ch;
 var freqMap = new Map();
 var unique = '';

 //itirate over a string and store frequency of word into map first time
 for(i = 0; i < input.length; i++){
    ch = input[i];
    //if this character occuring only once set into map with 1 else set value -1
    if(freqMap.get(ch))
      freqMap.set(ch,-1)
    else
      freqMap.set(ch,1)
    }

 //Now itirate over map and get only those character which has frequency 1
   freqMap.forEach(function(val,key){
     if(val == 1)
     unique += key;
   });

   return unique;
}

findUniqueInString('Hello World');
//will output He Wrd
findUniqueInString('Hello');
//will output heo
findUniqueInString('himanshu');
//will output imanshu
