function DoublyLinkedList(){
	let Node = function(element){
		this.element = element;
		this.next = null;
		this.prev = null;
	}

	let length = 0;
	let head = null;n//for a circular linked list, head.prev = tail;
	let tail = null; //for a circular linked list, tail.next = head;

	this.append = (element) => {
		let node = new Node(element);
		if (!head){
			head = node;
		} else{
			while (current.next){
				current = current.next;
			}
			current.next = node;
			node.prev = current;
		}
		tail = node;
		length ++;
	};

	this.insert = (element,location) =>{
		if (location > -1 && location < length){ //bounds check
			let node = new Node(element); //create node
			let current = head; //set starting point
			let previous;
			if (position === 0){ //insert at origin
				if (!head){ //no head exists
					head = node;
					tail = node;
				}else{
					node.next = current; //point nodes next to new next
					current.prev = node; //unlink old head and point to new node
					head = node; //assign head to new node
				}
			} else if (position === length){ //insert at the end
				current = tail; 
				tail.next = node; //set old tail next to new node
				node.prev = current; //new node prev points to old tail
				tail = node; //assign tail to new node
			} else{
				for (let i = 0 ; i < location ; i++){ //loop through nodes 
					previous = current;
					current = current.next;
				}
				previous.next = node;
				current.prev = node;
				node.prev = previous;
				node.next = current;
			}
			length++;
		}
	};
	this.removeAt = (element,location) =>{
		if (location > -1 && location < length){ //bounds check
			let current = head;
			let index = 0;
			if (position === 0){
				head = current.next;
				if (length === 1){
					tail = null;
				} else{
					head.prev = null;
				}
			} else if (position === length - 1){
				tail = current.prev;
				tail.next = null;
			} else{
				while (index++ < position){
					previous = current;
					current = current.next;
				}
				previous.next = current.next;
				current.next.prev = previous;
			}
			length--;
			//return element here(if you want)
		}
		//else return null / failed
	};
	this.indexOf = (element) =>{
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
	this.remove = (element) =>{
		this.removeAt(this.indexOf(element));
	};
	this.toString = () =>{
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
	this.isEmpty = () => length === 0;
	this.print = () => this.toString;
	this.getHead = () => head;
	this.getTail = () => tail;
}

export default DoublyLinkedList;