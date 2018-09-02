const obj = {
    a: {
        b: {
            c: 1
        }
    }
}
var s = JSON.stringify(obj);
var newObj = JSON.parse(s);
console.log(newObj);
// const clone = 
function cloningDevice(obj2){
    var x = JSON.stringify(obj2);
    var z = JSON.parse(x);
    return z;
}
const clone = cloningDevice(obj);
console.log(obj);
console.log(clone);
clone.a.b.c = 2;
console.log(obj, "old object");
console.log(clone, "modified clone");
//success