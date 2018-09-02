const obj = {
    a: {
        b: {
            c: 1
        }
    }
}
// const clone = obj;  // dont do this
const clone = cloningDevice(obj);
function cloningDevice(obj){
    var newObj = {};
    for (key in obj){
        newObj[key] = obj[key];
    }
    console.log(newObj, 'new');
    return newObj;
}
cloningDevice(obj);
console.log(clone);
clone.a.b.c = 2;
console.log(obj.a.b.c);
// fail