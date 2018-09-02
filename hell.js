Array.prototype.print = function() {
    console.log("printing");
    console.log(this);
    console.log(this.length);
    var result = "";
    for (var i = 0; i < this.length; i++) {
        result += this[i];
        if(i<this.length-1){
            result +=",";
        }
    }
    console.log(result);
    return this;
};
[1,2].print();
[1,21234,2345,23,'234z',4,'q'].print();