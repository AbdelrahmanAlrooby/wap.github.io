class LinkedList {
    constructor(arr) {
      if (arr) {
        arr.forEach((elem) => this.add(elem));
      }
    }
  
    add(element) {
      if (this.head === undefined) {
        this.head = { value: element, next: null };
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = { value: element, next: null };
      }
    }
  
    remove(element) {
      if (this.head && this.head.value === element) {
        this.head = this.head.next;
        return true;
      }
  
      let current = this.head;
      let prev = null;
  
      while (current) {
        if (current.value === element) {
          prev.next = current.next;
          return true;
        }
        prev = current;
        current = current.next;
      }
  
      return false;
    }
  
    printHelper(list, result) {
      if (list.next == null) {
        result += list.value;
        return result;
      }
  
      result += list.value + ',';
      return this.printHelper(list.next, result);
    }
  
    print() {
      let result = 'LinkedList{';
      result = this.printHelper(this.head, result);
      result += '}';
      console.log(result);
    }
  }
  