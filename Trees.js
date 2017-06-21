function BinarySearchTree(){
	let Node = (key) => {
		this.key=key;
		this.left = null;
		this.right = null;
	};

	let root = null;

// • insert(key): This inserts a new key in the tree
	this.insert = (key) => {
		let newNode = Node(key);
		if (root == null){
			this.root = newNode;
		} else{
			insertNode(root,newNode);
		}
	};
// • search(key): This searches for the key in the tree and returns true if it
// exists and returns false if the node does not exist
	this.search = (key) => return searchNode(root,key);

// • inOrderTraverse: This visits all nodes of the tree using in-order traverse
	this.inOrderTraverse = (callback) => return inOrderTraverseNode(root,callback);

// • preOrderTraverse: This visits all nodes of the tree using pre-order traverse
	this.preOrderTraverse = (callback) => return preOrderTraverseNode(root,callback);

// • postOrderTraverse: This visits all nodes of the tree using post-order traverse
	this.postOrderTraverse = () => return postOrderTraverseNode(root,callback);

// • min: This returns the minimum value/key in the tree
	this.min = () => return minNode(root);

// • max: This returns the maximum value/key in the tree
	this.max = () => return maxNode(root);

// • remove(key): This removes the key from the tree
	this.remove = (key) => root = removeNode(root,key);

// Helper functions
	let insertNode = (node,newNode) => {
		if (newNode.key < node.key){
			if (node.left === null){
				node.left = newNode;
			}else{
				insertNode(node.left,newNode);
			}
		} else{
			if(node.right === null){
				node.right = newNode;
			} else{
				insertNode(node.right,newNode);
			}
		}
	};
	let inOrderTraverseNode = (node,callback) => {
		if( node !== null){
			inOrderTraverseNode(node.left,callback);
			callback(node.key);
			inOrderTraverseNode(node.right,callback);
		}
	};
	let preOrderTraverseNode = (node,callback) => {
		if (node !== null){
			callback(node.key);
			preOrderTraverseNode(node.left, callback);
			preOrderTraverseNode(node.right, callback);
		}
	};
	let postOrderTraverseNode = (node, callback) => {
		if (node !== null){
			postOrderTraverseNode(node.left, callback);
			postOrderTraverseNode(node.right,callback);
			callback(node.key);
		}
	};
	let minNode = (node) => {
		if(node){
			while (node !== null && node.left !== null){
				node = node.left;
			}
			return node.key;
		}
		return null;
	};
	let findMinNode = (node) => {
		if(node){
			while (node !== null && node.left !== null){
				node = node.left;
			}
			return node;
		}
		return null;
	};
	let maxNode = (node) => {
		if(node){
			while(node !== null && node.right !== null){
				node = node.right;
			}
			return node.key;
		}
		return null;
	};
	let searchNode = (node, key) => {
		if(node == null){
			return false;
		}
		if (key < node.key){
			return searchNode(node.left, key);
		} else if (key > node.key){
			return searchNode(node.right, key);
		} else{
			return true;
		}
	};
	let removeNode = (node,key) => {
		if (node === null){
			return null;
		}
		if (node.key < key){
			node.left = removeNode(node.left,key);
			return node;
		} else if (node.key > key){
			node.right = removeNode(node.right,key);
			return node;
		} else{
			//case 1 leaf node
			if (node.left === null && node.right === null){
				node = null;
				return node;
			}
			//case 2 node with one child
			if (node.left === null){
				node = node.right;
				return node;
			} else if (node.right === null) {
				node = node.left;
				return node;
			}
			//case 3 node with two children
			let aux = findMinNode(node.right);
			node.key = aux.key;
			node.right = removeNode(node.right, aux.key);
			return node;
		}
	}
}

export default BinarySearchTree;