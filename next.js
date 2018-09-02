// Array.prototype.print = ()=>{   // arrow function I was trying to use fails
//     var result = "k";
//     // loop through fucking array
//     console.log(this.length);
//     console.log("hello");
//     console.log(result);
//     return this;
// }
Array.prototype.print = function(){  // this works
    var result = "k";
    // loop through fucking array
    console.log(this.length);
    console.log("hello");
    console.log(result);
    return this;
}
r=[1,2]
console.log(r.reverse());
console.log(r.print());

var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"

// revisited success