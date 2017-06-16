function Set(){ //this is now a default class in ES6
	var items = {};
	this.add = (value) => {
		if (!this.has(value)){
			items[value] = value; //adding the value as a key  for easier indexing/access
			return true;
		}
		return false;
	};
	this.remove = (value) => {
		if(this.has(value)){
			delete items[value]; //use object's delete function
			return true;
		}
		return false;
	};
	this.has = (value) => {
		return items.hasOwnProperty(value); //checks if the object has property and returns a bool
	};
	this.clear = () => items = {};
	this.size = () =>{
		return Object.keys(items).length;
	};
	this.sizeLegacy = () =>{
		let count = 0;
		for (let prop in items){ //go through each property in the object that has been added
			if (items.hasOwnProperty(prop)){
				count++;
			}
		}
		return count;
	};
	this.values = () => {
		return Object.keys(items); 
	}
	this.valueLegacy = () => {
		let keys = [];
		for (let key in items){
			keys.push(key);
		}
		return keys;
	};
	this.union = (setB) => { //return a set that contains elements from both this and other set
		let unionSet = new Set();
		let values = this.values();
		for (i = 0; i < values.length; i++){
			unionSet.add(values[i]);
		}
		values = setB.values();
		for(i = 0; i < values.length; i++){
			unionSet.add(values[i]);
		}
		return unionSet;
	};
	this.intersection = (setB) => { //return a set that contains only elements found in this and other set
		let intersectionSet = new Set();
		let values = this.values();
		for( i = 0; i < values.length; i++){
			if (setB.has(values[i])){
				intersectionSet.add(values[i]);
			}
		}
		return intersectionSet;
	};
	this.difference = (setB) => { //difference of Set A from B
		let differenceSet = new Set();
		let values = this.values();
		for (i = 0; i < values.length; i++){ //loop through this set A values
			if (!setB.has(values[i])){ //comparison to see if set B does not contains a value
				differenceSet.add(values[i]); //set B does not contain the value, add to differenceSet
			}
		}
		return differenceSet;
	};
	this.subset = (setB) => {
		if (setB.size() < this.size()){ //check size and see if Subset A of B is possible
			return false;
		}
		let values = this.values();
		for (i = 0; i < values.length; i++){ //loop through set A values
			if (!setB.has(values[i])){ //if setB does not contain a vlalue from set A
				return false; 
			}
		}
		return true;
	};
}
export default Set;