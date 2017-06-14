// Leapfrog solution to finding out if a linked list is looping or not. Also known as Floyd’s Cycle-Finding Algorithm
function hasLoop(Node linkedList){
	// FIND THE LOOP
	if (!linkedList.head){
		return false;
	} 

	let pointerA = head.next;
	// SAFETY: You should return if A is null!
	
	let pointerB = head.next.next;
	// SAFETY: What if head.next is null? Then the above line would be an error, ie: null.next
	// SAGETY: What if B is null!
	
	while (pointerA !== pointerB){
		pointerA = pointerA.next;
		// SAFETY: Null check A
		pointerB = pointerB.next.next;
		// SFETY: null check b.next and then B
		
		if (pointerA.next == null || pointerB.next.next == null){
			return false;
		}
	}
	//at this point we have found that a loop exists
	// return true;
	// QUESTION: Why is this commented out?

	// REMOVE THE LOOP
	let p = 0; 
	while (pointerA !== pointerB){ 
		pointerA = pointerA.next;
		p++;
	}
	let pointerC = linkedList.head;
	while (pointerC !== pointerA){
		pointerC = pointerC.next;
	}
	for( i = 0 ; i < p ; i++){
		pointerC = pointerC.next;
	}	
	pointerC.next = null;
	linkedList.tail = pointerC;
}
