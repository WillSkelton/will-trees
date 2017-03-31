const Tree = function(root) {
  this.root = new Node(root);
}

const Node = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

Tree.prototype.traverseLDR = function () {

  console.log('========== LDR ===========');

  function nodeLDR(node) {
    if (node.left) {
      nodeLDR(node.left)
    }

    console.log(node.value);

    if (node.right) {
      nodeLDR(node.right);
    }

    return;
  }

  nodeLDR(this.root)
};

Tree.prototype.traverseDLR = function () {

  console.log('========== DLR ===========');

  function nodeLDR(node) {
    console.log(node.value);

    if (node.left) {
      nodeLDR(node.left)
    }

    if (node.right) {
      nodeLDR(node.right);
    }

    return;
  }

  nodeLDR(this.root)
};

Tree.prototype.traverseLRD = function () {

  console.log('========== LRD ===========');

  function nodeLDR(node) {
    if (node.left) {
      nodeLDR(node.left)
    }

    if (node.right) {
      nodeLDR(node.right);
    }
    console.log(node.value);


    return;
  }

  nodeLDR(this.root)
};

const myTree = new Tree('A');

myTree.root.left = new Node('B');
myTree.root.right = new Node('C');

myTree.root.left.left = new Node('D');
myTree.root.left.right = new Node('E');
myTree.root.right.left = new Node('F');
myTree.root.right.right = new Node('G');

myTree.root.left.left.left = new Node('H');
myTree.root.left.left.right = new Node('I');
myTree.root.left.right.left = new Node('J');
myTree.root.left.right.right = new Node('K');
myTree.root.right.left.left = new Node('L');
myTree.root.right.left.right = new Node('M');
myTree.root.right.right.left = new Node('N');
myTree.root.right.right.right = new Node('O');


myTree.traverseLDR();
myTree.traverseDLR();
myTree.traverseLRD();
