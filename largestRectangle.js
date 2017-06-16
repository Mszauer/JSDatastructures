function largestRectangle(histogram){
	let h = 0; //height tracker
	let pos = 0; //position tracker

	let tempHeight = 0;
	let tempPos = 0;
	let tempSize = 0;
	let maxSize = 0;

	function popOff{
		tempHeight = hStack.pop();
		tempPos = pStack.pop();
		tempSize = tempHeight * (pos-tempPos);
		maxSize = Math.max(tempSize, maxSize);
	}

	let hStack = []; //stack for heights
	let pStack = []; //stack for position

	for ( ;  pos < histogram.length; pos++){ //loop until end of histogram
		h = histogram[pos]; //height is set to current histogram element
		if (hStack.length === 0 ||  h > hStack[hStack.length-1]){ //if we are starting the stack OR current element height is greater than the largest height 
			hStack.push(h);
			pStack.push(pos);
		} else if ( h < hStack[hStack.length-1]){
			while ( hStack.length && h < hStack[hStack.length-1]){
				popOff();
			}
			hStack.push(h);
			pStack.push(tempPos);
		}
	}
	while( hStack.length){ //purge stacks and calculate areas of remaining
		popOff();
	}
	return maxSize;
}