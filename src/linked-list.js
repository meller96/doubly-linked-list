const Node = require('./node');
class LinkedList { 
constructor() { 
this._head = new Node(null, null, this._tail); 
this._tail = this._head; 
this.length = 0; 
} 

append(data) { 
if (this._head.data == null) 
{ 
this._head.data = data; 
this._tail.data = data; 
} 
else 
{ 
this._tail = new Node(data, this._tail, null); 
this._tail.prev.next = this._tail; 
} 
this.length++; 
} 

head() { 
return this._head.data; 
} 

tail() { 
return this._tail.data; 
} 

atNode(index) 
{ 
var result = this._head; 
for (var i = 0; i < index; i++) 
{ 
result = result.next; 
if (result == null) 
return null; 
} 
return result; 
} 

at(index) { 
if (this.atNode(index) == null) 
return null; 
return this.atNode(index).data; 
} 

insertAt(index, data) { 
var prevNode = this.atNode(index - 1); 
if (prevNode!=null) 
{ 
var newNode = new Node(data, prevNode, prevNode.next); 
newNode.next.prev = newNode; 
prevNode.next = newNode; 
this.length++; 
} 
} 

isEmpty() { 
return (this._head.data == null); 
} 

clear() { 
this._head = new Node(null, null, this._tail); 
this._tail = new Node(null, this._head, null); 
this.length = 0; 
} 

deleteAt(index) { 
var prevNode = this.atNode(index - 1); 
if (prevNode!=null && prevNode.next!=null) 
{ 
var postnextNode = prevNode.next.next; 
prevNode.next = postnextNode; 
if (postnextNode != null) 
postnextNode.prev = prevNode; 
this.length--; 
} 
} 

reverse() { 
var tempNode = this._head; 
//this.print(); 
while (tempNode!=null) 
{ 
var tempnextNode = tempNode.next; 
var tempprevNode = tempNode.prev; 
tempNode.next = tempprevNode; 
tempNode.prev = tempnextNode; 
tempNode = tempNode.prev; 
} 
//this.print(); 
} 

print() 
{ 
var tempNode = this._head; 
while (tempNode!=null) 
{ 
console.log(tempNode.data); 
tempNode = tempNode.next; 
} 
} 

indexOf(data) { 
var index = 0; 
var tempNode = this._head; 
while (tempNode!=null) 
{ 
if (tempNode.data == data) 
return index; 
index++; 
tempNode = tempNode.next; 
} 
return -1; 
} 
} 

module.exports = LinkedList;
