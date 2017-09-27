const Node = require('./node');

class LinkedList {
    var start = null;
    var tail = null;
    
    constructor() {}

    append(data) {
        if (head() == null)
        {
            start = new Node(data);
            tail = start;
            start.next = tail;            
        }
        else
        {
            var newNode = new Node(data, tail);            
            tail.next = newNode;
            tail = newNode
        }
    }

    head() {
        return start;
    }

    tail() {
        return tail;
    }

    at(index) {
        var result = start;
        for (var i = 0; i < index; i++)
        {
            result = result.next;
            if (result == null)
                return null;
        }
        return result;
    }

    insertAt(index, data) {
        var prevNode = at(index - 1);
        if (prevNode!=null)
        {
            var newNode = new Node(data, prevNode);
            prevNode.next.prev = newNode;
            prevNode.next = newNode;
        }
    }

    isEmpty() {
        return (start == null);
    }

    clear() {
        start = null;
        tail = null;
    }

    deleteAt(index) {
        var prevNode = at(index - 1);
        if (prevNode!=null && prevNode.next!=null)
        {
            var postnextNode = prevNode.next.next;            
            prevNode.next = prevNode.next.next;
            if (postnextNode != null)
                postnextNode.prev = prevNode;
        }
    }

    reverse() {
        var tempNode = start;
        while (tempNode!=null)
        {
            tempTempNode = tempNode.next;
            tempNode.next = tempNode.prev;
            tempNode.prev = tempTempNode;
            tempNode = tempNode.prev;
        }
    }

    indexOf(data) {
        var index = 0;
        var tempNode = start;
        while (tempNode!=null)
        {
            if (tempNode.data == data)
                return index;
            index++;

module.exports = LinkedList;
