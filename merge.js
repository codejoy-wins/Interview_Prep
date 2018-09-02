// write a function that merges 2 arrays keeping them sorted

const a = [1,2,5,7,9];
const b = [2,5,7,12,100];
// merge(a,b);  returns c
const c = [1,2,2,5,5,7,7,9,12,100];

function merge(arr1,arr2){
    var x = [];
    var compare = arr1.length <= arr2.length;
    if(compare == true){
        var small = arr1;
        var big = arr2;
    }else{
        var small = arr2;
        var big = arr1;
    }
    while(small.length>0){
        if(small[0]<=big[0]){
            x.push(small[0]);
            small.shift();
        }else{
            x.push(big[0]);
            big.shift();
        }
    }
    while(big.length>0){
        x.push(big[0]);
        big.shift();
    }
    console.log(compare);
    console.log(x);
}
merge(a,b);
merge([44,203,444],[99,303]);

// Great success