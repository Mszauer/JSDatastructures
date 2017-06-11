function LinkedList(){
	let Node = function(element){
		this.element = element;
		this.next = null;
	};

	let length = 0;
	let head = null;

	this.append = (element) => {
		let node = new Node(element); //create node
		if (head === null){//check if list is empty
			head = element;//set as first element if list is empty
		} else{
			let current = head; //start of the list
			while (current.next){ //while not at last element
				current = current.next; //move onto next element
			}
			current.next = node; //at last node, assign it's .next to newly created node
		}
		length++; //increment length of the list
	};
	this.insert = (position,element) => {
		let node = new Node(element); //create node
		if (position > -1 && position < length){ //check for valid position
			if (position === 0){ //insert at start of list
				node.next = head; //set new nodes next to old head
				head = node; //set head to new node
			} else{
				let current = head; //start of the list
				for (let i = 0 ; i < length ; i++){ //loop until spot before insertion point
					current = current.next; //move onto next element
				}
				node.next = current.next; //set previous nodes.next to new nodes.next
				current.next = node; //set node's next to new node
			}
			length++; //increment length of list
		}
	};
	this.removeAt = (position) => {
		if (position === 0){ //removing the head node
			head = head.next; //set head to next element
		}else{
			let current = head; //start of the list
			for (let i = 0 ; i < position ; i++){ //loop until we reach removal point
				current = current.next; //move onto next element
			}
			//alternatively keep a previous, and do previous.next = current.next
			current.next = current.next.next; //unlink the next element and set it to the one after that
			length--; //decrement length of list
		}

	};
	this.remove = (element) => {
		//alternatively use indexOf : this.removeAt(this.indexOf(element));
		let current = head; //start of the list
		while (current.next){ //while not at last element
			if (current.element !== element){ //if elements are not identical
				current.next; //move onto next element
			}
			//alternatively keep a previous, and do previous.next = current.next
			current.next = current.next.next; //unlink the next element and set it to the one after that
			length--; //decrement length of list
		}

	};
	this.indexOf = (element) => {
		let current = head; //start of the list
		//let i = 0; //initialize counter
		for (let i  = 0 ; i < length ; i++){ //loop through list (could be done in  while(current.next){} as well
			if (current.element !== element){ //if elements are not identical
				current = current.next; //move onto next element
			} else{
				return i; //element found, return index (base 0)
			}
		}
		return -1; //element not found
	};

	this.isEmpty = () => length === 0; //if length is 0, list is null
	this.size = () => length; //return length of the list
	this.toString = () => {
		let current = head; //start of the list
		let string = ''; //instialize empty list
		while (current){ //if current is not null
			string = current.element; //appent current node's element
			current = current.next; //move onto next element
		}
		return string; //return finished string;
	};
	this.print = () => {
		this.toString(); //return toString
	};
	this.getHead = () => head; //return head
}

export default LinkedList;