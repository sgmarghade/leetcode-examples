export class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    //Check if tree is empty
    isEmpty(): boolean {
        return this.root === null;
    }

    //Insert node in tree.
    insert(value: number) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root as Node, node);
        }
    }

    private insertNode(root: Node, newNode: Node) {
        if (newNode.value <= root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    //Search value in tree
    search(root: Node | null, valueToSearch: number): boolean {
        if (!root) {
            return false;
        }

        if (root.value === valueToSearch) {
            return true;
        }

        if (valueToSearch < root.value) {
            return this.search(root.left, valueToSearch);
        } else {
            return this.search(root.right, valueToSearch);
        }
    }

    //DFS -> VLR
    preorderTraversal(root: Node | null) {
        if (root) {
            console.log(root.value);
            this.preorderTraversal(root.left);
            this.preorderTraversal(root.right);
        }
    }

    //DFS -> LVR
    inorderTraversal(root: Node | null) {
        if (root) {
            this.inorderTraversal(root.left);
            console.log(root.value);
            this.inorderTraversal(root.right);
        }
    }

    //DFS -> LRV
    postorderTraversal(root: Node | null) {
        if (root) {
            this.postorderTraversal(root.left);
            this.postorderTraversal(root.right);
            console.log(root.value);
        }
    }

    //BFS : Push root to queue.
    //Read from queue print value and push it's left and right node to queue if exists.
    levelOrder() {
        const queue: (Node | null)[] = [];
        queue.push(this.root);
        while (queue.length) {
            const current = queue.shift() as Node;
            console.log(current.value);
            if (current && current.left) {
                queue.push(current.left);
            }
            if (current && current.right) {
                queue.push(current.right)
            }
        }
    }

    //Return min value of tree
    min(root: Node): number {
        if (!root?.left) {
            return root.value;
        }
        return this.min(root.left);
    }

    //Return max value of tree
    max(root: Node): number {
        if (!root.right) {
            return root.value;
        }

        return this.max(root.right);
    }

    /**
     * Delete node
     * 1. Node is leaf node -> No child. Just remove node
     * 2. Node has 1 child node -> Remove node and replace it with child.
     * 3. Node has 2 child nodes -> Replace value with least value from right
     *    and delete least value node from right.
     */
    delete(value: number) {
        this.root = this.deleteNode(this.root as Node, value);
    }

    private deleteNode(root: Node | null, value: number): Node | null {
        if (!root) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else if (value === root.value) {
            //Leaf node
            if (root.left === null && root.right === null) {
                return null;
            } else if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }

        return root;
    }

}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log('********** Search *****************');
console.log(tree.search(tree.root, 10));
console.log(tree.search(tree.root, 20));

console.log('********** PreOrder *****************');
tree.preorderTraversal(tree.root);

console.log('********** InOrder *****************');
tree.inorderTraversal(tree.root);

console.log('********** PostOrder *****************');
tree.postorderTraversal(tree.root);

console.log('********** LevelOrder / BFS *****************');
tree.levelOrder();

console.log('********** Min Value of tree *****************');
console.log(tree.min(tree.root as Node));

console.log('********** Max Value of tree *****************');
console.log(tree.max(tree.root as Node));

console.log('*********** Delete node 15 **********************');
tree.delete(15);
tree.inorderTraversal(tree.root);