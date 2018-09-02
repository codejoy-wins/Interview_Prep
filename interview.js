// create array with only values
var x = {
    a:1,
    b:2
};

var r = [];
for (key in x){
    r.push(x[key]);
}
console.log(r);