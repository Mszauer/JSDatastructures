// Leapfrog solution to finding out if a linked list is looping or not. Also known as Floyd’s Cycle-Finding Algorithm
function hasLoop(Node linkedList){
	// FIND THE LOOP
	if (!linkedList.head){
		return false;
	} 

	let pointerA = head.next;
	let pointerB = head.next.next;

	while (pointerA !== pointerB){
		pointerA = pointerA.next;
		pointerB = pointerB.next.next;
		if (pointerA.next == null || pointerB.next.next == null){
			return false;
		}
	}
	//at this point we have found that a loop exists
	// return true;


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