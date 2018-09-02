function reverseString(s){
    var z = "";
    for(var i =s.length-1; i >= 0; i--){
        z += s[i];
    }
    console.log(z);
}
reverseString("cat");
reverseString("rhinoceros");
