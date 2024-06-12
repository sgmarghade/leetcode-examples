/**
 * Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
 *
 * Implement the LRUCache class:
 *
 * LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
 * int get(int key) Return the value of the key if the key exists, otherwise return -1.
 * void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
 * The functions get and put must each run in O(1) average time complexity.
 */
class MyNode {
    value: number;
    key: number;
    next: MyNode | null;
    prev: MyNode | null;
    constructor(value: number, key: number) {
        this.value = value;
        this.key = key;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache {
    private cache: Record<number, MyNode>;
    private capacity: number;
    private head: MyNode; //Dummy head which points to tail or 1st node
    private tail: MyNode; //Dummy tail which prev points to last node or tail
    constructor(capacity: number) {
        this.cache = {};
        this.capacity = capacity;
        this.head = new MyNode(-1, -1);
        this.tail = new MyNode(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        if (this.cache.hasOwnProperty(key)) {
            const node = this.cache[key];
            this.moveToHead(node);
            return node.value;
        } else {
            return -1;
        }
    }

    put(key: number, value: number): void {
        if (this.cache.hasOwnProperty(key)) {
            const node = this.cache[key];
            node.value = value;
            this.moveToHead(node);
        } else {
            if (Object.keys(this.cache).length === this.capacity) {
                this.removeTail();
            }
            const node = new MyNode(value, key);
            this.cache[key] = node;
            this.addToHead(node);
        }
    }

    addToHead(node: MyNode) {
        node.next = this.head.next;
        (this.head.next as MyNode).prev = node;

        this.head.next = node;
        node.prev = this.head;
    }
    moveToHead(node: MyNode) {
        //Remove node
        (node.prev as MyNode).next = node.next;
        (node.next as MyNode).prev = node.prev;

        //Add to head
        this.addToHead(node)
    }

    removeTail() {
        const nodeToRemove = this.tail.prev as MyNode;
        (nodeToRemove.prev as MyNode).next = this.tail;
        this.tail.prev = nodeToRemove.prev;
        nodeToRemove.next = null;
        nodeToRemove.prev = null;
        delete this.cache[nodeToRemove?.key];
    }
}