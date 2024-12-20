class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function createFullBinaryTree(level) {
    if (level < 1) return null;

    const root = new TreeNode(1);  // 根節點的值可以根據需求改變
    const queue = [root];
    let value = 2;

    for (let i = 1; i < level; i++) {
        const nextQueue = [];
        for (const node of queue) {
            node.left = new TreeNode(value++);
            node.right = new TreeNode(value++);
            nextQueue.push(node.left);
            nextQueue.push(node.right);
        }
        queue.length = 0;  // 清空當前隊列
        Array.prototype.push.apply(queue, nextQueue);  // 對下一層進行賦值
    }

    return root;
}

function inorderTraversal(root) {
    if (root) {
        inorderTraversal(root.left);
        console.log(root.value);
        inorderTraversal(root.right);
    }
}

function preorderTraversal(root) {
    if (root) {
        console.log(root.value);
        preorderTraversal(root.left);
        preorderTraversal(root.right);
    }
}

function postorderTraversal(root) {
    if (root) {
        postorderTraversal(root.left);
        postorderTraversal(root.right);
        console.log(root.value);
    }
}

// 執行示例
const level = 4; // 設定層級
const root = createFullBinaryTree(level);

console.log("中序遍歷:");
inorderTraversal(root);

console.log("前序遍歷:");
preorderTraversal(root);

console.log("後序遍歷:");
postorderTraversal(root);