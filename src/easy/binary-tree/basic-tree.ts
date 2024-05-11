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

    isEmpty(): boolean {
        return this.root === null;
    }

    insert(value: number) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.root = node;
        } else {
            this.insertNode(this.root as Node, node);
        }
    }

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

    //VLR
    preorderTraversal(root: Node | null) {
        if (root) {
            console.log(root.value);
            this.preorderTraversal(root.left);
            this.preorderTraversal(root.right);
        }
    }
    //LVR
    inorderTraversal(root: Node | null) {
        if (root) {
            this.inorderTraversal(root.left);
            console.log(root.value);
            this.inorderTraversal(root.right);
        }
    }

    //LRV
    postorderTraversal(root: Node | null) {
        if (root) {
            this.postorderTraversal(root.left);
            this.postorderTraversal(root.right);
            console.log(root.value);
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
