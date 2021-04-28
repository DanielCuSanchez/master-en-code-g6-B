/* Binary Search Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left); //
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // el nodo no tiene hijos
        if (node.left == null && node.right == null) {
          return null;
        }
        // el nodo no tiene hijos a la izquierda
        if (node.left == null) {
          return node.right;
        }
        // el nodo no tiene hijos a la derecha
        if (node.right == null) {
          return node.left;
        }
        // el nodo tiene dos hijos
        var tempNode = node.right; // creamos un nodo temporal
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        // solo tiene el hijo de la izquierda
        node.left = removeNode(node.left, data);
        return node;
      } else {
        // solo tiene el hijo de la derecha
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}

const bst = new BST();

bst.add(21);
bst.add(14);
bst.add(11);
bst.add(10);
bst.add(16);
bst.add(28);
bst.add(23);
bst.add(39);
bst.add(25);
bst.add(32);
bst.add(46);

console.log('El valor mínimo es:',bst.findMin())
console.log('El valor máximo es:',bst.findMax())

console.log(bst.find(28))

bst.remove(28)

console.log(bst.find(28))

console.log(bst.root.right)
