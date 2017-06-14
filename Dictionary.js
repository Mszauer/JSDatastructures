// Also known as Map in es6
function Dictionary{
	let items = {};
	// set(key,value): This adds a new item to the dictionary.
	this.set = (key,value) => {
		if (!this.has(key)){
			items[key] = value;
			return true;
		}
		return false;
	};
	// remove(key): This removes the value from the dictionary using the key.
	this.remove = (key) => {
		if (this.has(lkey)){
			delete items[key];
			return true;
		}
		return false;
	};
	// has(key): This returns true if the key exists in the dictionary and false otherwise.
	this.has = (key) => {
		return key in items;
	};
	// get(key): This returns a specific value searched by the key.
	this.get = (key) => this.has(key) ? items[key] : undefined;
	// clear(): This removes all the items from the dictionary.
	this.clear = () => items = {};
	// size(): This returns how many elements the dictionary contains. It is similar to the length property of the array.
	this.size = () => {
		return Object.keys(items).length;
	};
	// keys(): This returns an array of all the keys the dictionary contains.
	this.keys = () => {
		return Object.keys(items);
	};
	// values(): This returns an array of all the values of the dictionary.
	this.values = () => {
		let values = [];
		for (let k in items){
			if (this.has(k)){
				values.push(k);
			}
		}
		return values;
	};
}

export default Dictionary;