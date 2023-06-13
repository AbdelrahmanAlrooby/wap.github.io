const LinkedList = {
    head: null,
  
    Node(value) {
      return {
        value: value,
        next: null,
      };
    },
  
    add(element) {
      const newNode = this.Node(element);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    },
  
    remove(element) {
      if (this.head === null) {
        return;
      }
  
      if (this.head.value === element) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let prev = null;
  
      while (current !== null) {
        if (current.value === element) {
          prev.next = current.next;
          return;
        }
        prev = current;
        current = current.next;
      }
    },
  
    print() {
      let result = "LinkedList{";
      let current = this.head;
      while (current !== null) {
        result += current.value;
        if (current.next !== null) {
          result += ",";
        }
        current = current.next;
      }
      result += "}";
      console.log(result);
    },
  };
  
  function createLinkedList() {
    return Object.create(LinkedList);
  }
  
  const linkedlist = createLinkedList();
  linkedlist.add(1);
  linkedlist.add(2);
  linkedlist.add(3);
  linkedlist.print(); // Expected Result: LinkedList{1,2,3}
  linkedlist.remove(2);
  linkedlist.print(); // Expected Result: LinkedList{1,3}
  