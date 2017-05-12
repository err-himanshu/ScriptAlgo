/*
In computer science, a singly-linked list is a data structure that holds a sequence of linked nodes. Each node, in turn, contains data and a pointer, which can point to another node.Nodes of a singly-linked list are very similar to steps in a scavenger hunt. Each step contains a message (e.g. "You've reached France") and pointers to the next step (e.g. "Visit these latitude and longitude coordinates"). When we start sequencing these individual steps to form a sequence of steps, we are creating a scavenger hunt.Now that we have a conceptual model of a singly-linked list, let's explore the operations of a singly-linked list.
*/
/***************  opoerations in link lists allowed : ***************************/
/*
 1. insert an item to link list
 2. search node at Kth position
 3. delete node from link list
 */
'use strict';
 function LinkedList(){
   this.head = null;
 }

//add node to link list
 LinkedList.prototype.addNode = function(val){
   //create a node for link list which holds the value and next pointer
   var node = {
     data: val,
     next: null
   }

   //first case when link list is empty then insert to it's node
   if(!this.head){
     this.head = node;
   }
   //if head is not empty
   else {
     var p1 = this.head;
     //check if next exists in the list then add value to it
     while(p1.next){
       p1 = p1.next;
     }
     p1.next = node;
   }
 };

//delete a node using value
 LinkedList.prototype.deleteNode = function(value){
   //1 case check if link list is empty
   var nodeExist = false;
   if(!this.head){
     console.log('Link list is empty');
     return;
   }
   //2 case when given node is head
   else if (this.head.data === value){
      this.head = this.head.next;
   }
   else{
      var p1 = this.head;
      var p2 = p1.next;
      while(p2){
        if(p2.data === value){
          p1.next = p2.next
          break;
        }else{
          p1 = p2;
        }
        p2 = p2.next;
      }
   }

 };

 //function to get link list length
 LinkedList.prototype.getLinkedListLength = function(){
   var count = 0;
   var p1 = this.head;
   recursiveCount(p1)
   //recursively call this function
   function recursiveCount(n){
      if(n === null){
      }else{
        count++;
        recursiveCount(n.next)
      }
   };
   return count
 };
 LinkedList.prototype.removeNodeatPosition = function(position){
   var _length = L1.getLinkedListLength();
   var count = 2;
   //1 case when link list is empty
   if(_length === 0){
     console.log('Link list is empty');
     return;
   }
   // 2 case when position is out of length
   else if (position > _length){
     console.log('Invalid position');
     return;
   }
   // 3 case when this is head or position 1
   else if (position === 1){
    this.head = this.head.next;
   }
   //4 case when this is not head, position is any other then 1
   else{
     var p1 = this.head;
     var p2 = p1.next;
      while(p2){
        if(count == position){
          p1.next = p2.next;
          break;
        }else{
          p1 = p2;
          count++;
        }
        p2 = p2.next;
      }
   }
 };

 //Delete a node kth node link list from end

 LinkedList.prototype.removeNodeatPositionFromEnd = function(position){
    var _length = L1.getLinkedListLength();
    var count = _length - 1;
    //count = _length + 1;
    //1 case when link list is empty
    if(!this.head){
      console.log('Link list is empty');
      return;
    }
    //2 case when position is not in link list
    else if(position > _length){
      console.log('Node does not exist, invalid position');
      return;
    }
    //3 case if head has to be deleted
    else if (position === _length){
      this.head = this.head.next
    }
    else{
      var p1 = this.head;
      var p2  = p1.next;
      while(p2){
        if(count == position){
            p1.next = p2.next;
            break;
        }else{
            p1 = p2;
            count--;
        }
        p2 = p2.next;
      }
    }
 }

 //function to reverse a Link list
 //Approach - for this we will Iter­ate through linked list with three-pointers previous, current, next

 LinkedList.prototype.reverseLinkList = function(){
   //first check if link list is empty or having only one length
   if(!this.head || !this.head.next){
     console.log('No duplicates were found. Empty or a single element Linked List.');
     return;
   }
   var p1 = null;
   var p2 = this.head;
   var p3;
   while(p2){
     p3 = p2.next;
     p2.next = p1;
     p1 = p2;
     p2 = p3
   }
   this.head = p1;
 }

 //function to check if a link list is palindrom
 LinkedList.prototype.checkPalindrom = function(){
   //check if link list is not empty and having only one length
   if(!this.head || !this.head.next){
     console.log('No duplicates were found. Empty or a single element Linked List.');
     return;
   }
   var temp = JSON.stringify(this);
   var L2 = JSON.parse(temp)
   Object.setPrototypeOf(L2, this);
   L2.reverseLinkList();
   var l2 = L2.head;
   var l1 = this.head;
   while(l2){
     if(l2.data !== l1.data){
       return false;
     }
     l2 = L2.next;
     l1 = L1.next
   }
   return true;
 }

 //function to remove duplicate from a link list
 //approach  - Iter­ate through linked list adding each node to the hash table (JSON).
//             When the dupli­cate ele­ment is found, remove it from the linked list and update the linked list.

LinkedList.prototype.removeDuplicate  = function(){

  // 1 case when link is empty or having only one node
  if(!this.head || !this.head.next){
    console.log('No duplicate can be found, single or empty list')
    return;
  }
  var p1 = this.head;
  var p2 = p1.next;
  var nodes = {};
  nodes[p1.data] = true;
  while(p2){
    var data = p2.data
    if(nodes[data]){
      p1.next = p2.next
    }else{
      nodes[data] = true;
      p1 = p2;
    }
    p2 = p2.next;
  }
}
 // Create an instance of a LinkedList class
var L1 = new LinkedList();

// Create a linked list with six elements
  L1.addNode(5);
  L1.addNode(6);
  L1.addNode(7);
  L1.addNode(6);
  L1.addNode(5);
  L1.deleteNode(7);
  console.log(L1.checkPalindrom());
  L1.removeNodeatPosition(8);
  L1.removeNodeatPositionFromEnd(4);
  console.log(JSON.stringify(L1));
  L1.reverseLinkList();
  console.log(L1.checkPalindrom());
  L1.removeDuplicate();
  console.log(JSON.stringify(L1));
