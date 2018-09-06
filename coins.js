// function that gives minimal amount of coins for a value

// 20.47

const til = {
    penny:12,
    nickel:10,
    dime:2,
    quarter:12,
    dollar:30
};

function change(reg, amount){
    var ans = [];
    var pennies = 0;
    var nickels = 0;
    var dimes = 0;
    var quarters = 0;
    var dollars = 0;
    while(reg.dollar >0 && amount >=1){
        console.log('shed out dollars');
        reg.dollar = reg.dollar -1;
        dollars+=1;
        amount -=1;
    }
    ans.push(dollars);
    ans.push("dollars");
    console.log(ans);
    console.log(amount,"amount");

    while(reg.quarter >0 && amount >=.25){
        console.log('shed out quarters');
        reg.quarter -= 1;
        quarters+=1;
        amount -=.25;
    }
    ans.push(quarters);
    ans.push("quarters");
    console.log(ans);
    console.log(amount,"amount");
    while(reg.dime >0 && amount >=.10){
        console.log('shed out dimes');
        reg.dime -= 1;
        dimes+=1;
        amount -=.10;
    }
    console.log(reg.dime, "reg dime");
    console.log(amount,"amount");
    ans.push(dimes);
    ans.push("dimes");
    console.log(ans);
    console.log(amount);
    var final_amount = amount.toFixed(2);
    console.log(final_amount,"final amount");
    amount = final_amount;
    // pennies left
    while(reg.penny >0 && amount >=.01){
        console.log('shed out pennies');
        reg.penny -= 1;
        pennies+=1;
        amount -=.01;
    }
    console.log(reg.penny, "reg penny");
    console.log(amount,"amount");
    
    
    var final_amount = amount.toFixed(2);
    console.log(final_amount,"final amount");
    amount = final_amount;
    if (final_amount == 0.01){
        pennies++;
    }
    ans.push(pennies);
    ans.push("pennies");
    console.log(ans);
    console.log("done ------")
}
// change(til, 13.38);  // output 20 dollars, 1 quarter, 2 dimes, 0 nickels, 2 pennies

// change(til, 20.47);  // output 20 dollars, 1 quarter, 2 dimes, 0 nickels, 2 pennies
change(til, 27.46);

// 20.47        (20.47)
// -20 dollars  -(20)
// 0.47
// -1 quarter   -(.25)
// 0.22
//-2 dimes     -(.20)
// 0.02
// -2 pennies  -(.02)
// 0.00         0