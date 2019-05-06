// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        // initialize new node for tail
        const node = new Node (val);
        // if the linked list is empty, set the tail to the new node
        // and set the head to the new node
        if (!this.head) {
            this.head = node;
        // if its not empty, set the current tails pointer to new tail
        } else {
            this.tail.next = node;
        }
        // set the new node to the tail of ll
        // increment length by 1 for insertion
        this.tail = node;
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        // if the linked list is empty just return undefined
        if (!this.head) return undefined;
        // grab the current head in prep for iteration 
        let current = this.head;
        // save the current head for storage
        let newTail = current;
        // iterate from head thru the list until the current nodes pointer
        // is null, indicating the found tail and node before tail
        while (current.next) {
            newTail = current;
            // reassign the current node to next thru pointer in order to 
            // be able to iterate thru ll
            current = current.next;
        }
        // reassign the node before the tail to the new tail of ll
        this.tail = newTail;
        // set the new tail's pointer to null to indicate that it is tail
        this.tail.next = null;
        this.length--;
        // if the ll is empty, then reassign both the tail and head to null
        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        return current;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        // initialize new node for head
        const newHead = new Node (val);
        // if the linked list is empty, then insert new node in tail and head
        if (this.length === 0) {
            this.head = newHead;
            this.tail = newHead;
        // set the new head's pointer to the old head and set the
        // new head equal to newly created node
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        // increment the length by one for insertion
        this.length++
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        // save the old head so we can return it
        const oldHead = this.head;
        // if the head does exist the make its pointer the new head of ll
        if (this.head) {
            this.head = this.head.next;
        // otherwise return undefined
        } else {
            return undefined
        }
        // decrement by 1 before we check if ll is now empty
        this.length--
        // if the ll is now empty because of removed head then set both the
        // tail and head to null
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return oldHead
    }

    // TODO: Implement the contains method here
    contains(target) {
        let current = this.head;
        while (current) {
            if (current.value === target) return true;
            current = current.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let count = 0;
        let current = this.head;
        while (current) {
            if (count === index) return current;
            current = current.next;
            count++;
        }
        return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let count = 0;
        let current = this.head;
        while (current) {
            if (count === index) {
                current.value = val;
                return true;
            }
            current = current.next;
            count++
        }
        return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {

    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
