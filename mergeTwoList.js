var mergeTwoLists = function(list1, list2) {

    // I initizlized a dummy node to simplify the logic.
    // I assigned currentNode to the dummy node.
    let temporaryNode = new ListNode(0, null);
    let currentNode = temporaryNode;
    

    // while loop for our list as long as they are containing data.
    while (list1 && list2) {
        // I am comparing the current nodes in list1 and list2.
        if(list1.val < list2.val) {
            // If the value in list1 is smaller then we can add it to the merged list.
            currentNode.next = list1;
            list1 = list1.next
        } else {
            // if anything else list2 is smaller then we can add it to the merged list.
            currentNode.next = list2;
            list2 = list2.next
        }

         // we then take the currentNode and drop to the newly added node in the merged list.
        currentNode = currentNode.next;
    }
    // when the loop is done with its job, we attach the remaining elements, if any there is any, to the merged list.
    // next we will see if list1 still has elements, set currentNode.next to list1; or set it to list2.
    currentNode.next = list1 || list2;
    
     // lastly we return the merged linked list, starting from the node following the dummy node.
    return temporaryNode.next;
};