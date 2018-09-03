// missing number  [1-100]  1 number missing
// if given a range, and the fact that 1 number is missing, write function that finds missing num
// my strategy is to simply iterate through array checking if arr[i] + 1 = arr[i+1]
// it should unless the numbers missing, so if it doesn't, return the value in between the values separated by more than one
const ary = [1,2,3,4,6,7,8,9,10];
function missing(arr){
    for(var i = 1; i < arr.length; i++){
         if(arr[i] +1 != arr[i+1]){
            return arr[i+1]-1;
        }
    }
}
missing(ary);
console.log(missing(ary)); // 5
const ary2 = [40,41,42,43,44,45,46,48,49,50,51,52];
console.log(missing(ary2)); // 47