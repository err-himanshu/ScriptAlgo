/*
  This is an example to understand the queue and stack in javascript
  Stack  = LIFO (Last in first out)
  @functions
  push - push an item to stack
  pop - pop the last item from stack

  Queue - FIFO (first in first out)
  @functions
  push - push an item to Queue
  shift - delete first item from Queue

*/

//Queue implemention
var queue = new Array();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue);
// will output - [1,2,3,4]
queue.shift();
queue.shift();
console.log(queue);
//will output - [3,4]

// Stack implemention

var stack =  new Array();
//push item into Stack
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(3);
console.log(stack);
//will output - [1,2,3,4]
//pop item from stack
stack.pop();
stack.pop();

console.log(stack);
//will output - [1,2]
