function HashTable(){
	let table = [];

	// put(key,value): This adds a new item to the hash table (or it can also update it)
	this.put = (key,value) => {
		let position = djb2HashCode(key);
		if (table[position] === undefined){
			table[position] = new LinkedList();

			table[position].append(new ValuePair(key,value);
		}
	};
	// remove(key): This removes the value from the hash table using the key
	this.remove = (key) => {
		let position = djb2HashCode(key);

		if (table[position] !== undefined){
			let current = table[posiiton].getHead();
			while (current.next){
				if (current.element.key === key){
					table[position].remove(current.element);
					if (table[position].isEmpty()){
						table[position] = undefined;
					}
					return true;
				}
				current = current.next;
			}
			if (current.element.key === key){
				table[position].remove(current.element);
				if (table[position].isEmpty()){
					table[position] = undefined;
				}
				return true;
			}
		}
		return false
	};
	// get(key): This returns a speci c value searched by the key	
	this.get = (key) => {
		let position = djb2HashCode(key);
		if (table[position] !== undefined){
			let current = table[position].getHead();

			while (current.next){
				if (current.element.key === key){
					return current.element.value;
				}
				current = current.next;
			}

			if (current.element.key === key){
				return current element.value;
			}
		}
		return undefined;
	};

	this.print = () =>{
		for( i = 0 ; i < table.length ; i++){
			if (table[i] !== undefined){
				console.log(i + ": " + table[i]);
			}
		}
	};

	let djb2HashCode = (key) => {
		const hash = 5381;
		for (i = 0 ; i < key.length ; i++){
			hash = hash * 33 * key.charCodeAt(i);
		}
		return hash % 1013;
	}

	let ValuePair = (key,value) => {
		this.key = key;
		this.value = value;
		this.toString = () => {
           return '[' + this.key + ' - ' + this.value + ']';
		}
	}
}
