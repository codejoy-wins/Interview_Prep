// Linked List Constructor Function
function LinkedList(){
    this.head = null;
}

LinkedList.prototype.isEmpty = function(){
    return this.head === null;
}

LinkedList.prototype.size = function(){
    var runner = this.head;
    var count = 0;
    while(runner != null){
        runner = runner.next;
        count++;
    }
    return count;
}

LinkedList.prototype.prepend = function(val){
    console.log("prepending: " + val);

    var newNode = {
        data: val,
        next: this.head  // the head of the ll
    };

    this.head = newNode;
    
}

LinkedList.prototype.append = function(val){
    console.log("appending: " + val);

    var newNode = {
        data: val,
        next: null
    };

    if (this.isEmpty()){
        this.head = newNode;
        return;
    }

    var runner = this.head;
    while(runner.next){
        runner = runner.next;
    }
    runner.next = newNode;    
}
// [10] --> [23] --> [44] --> [32]
LinkedList.prototype.remove = function(val){
    // if it not contains return out;
    console.log("Contains val?: "+this.contains(val));
    if (!this.contains(val)){
        return;
    }

    if (this.head.data == val){
        this.head = this.head.next;
        return;
    }
    var runner = this.head;
    while(runner.next){
        if(runner.next.data == val){
            runner.next = runner.next.next;
            return;
        }
         runner = runner.next;
    }
    console.log("nothing to remove");
    return;
}

LinkedList.prototype.contains = function (val){
    var runner = this.head;
    while(runner){
        if (runner.data === val){
            return true;
        }
        runner = runner.next;
    }
    return false;
}

LinkedList.prototype.print = function(){
    var output = "Linked List: ";
    var runner = this.head;
    while(runner){
        console.log(runner.data);
        output += runner.data;
        output += ", ";

        runner = runner.next;
    }
    console.log(output);
    return output;
}



var linked = new LinkedList();
linked.append(14);
linked.prepend(4);
linked.append(17);
linked.append(77);
console.log(linked.contains(55));
console.log(linked.contains(77));
linked.remove(55);
linked.remove(17);

console.log(linked.size());
console.log(linked);

linked.append("donkey");
linked.prepend("horse");
linked.append("cat");
linked.remove("donkey");
linked.print();
// we did it!