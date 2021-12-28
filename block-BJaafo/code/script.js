function getFullName(firstName,lastName){
    return firstName +' '+ lastName;
}

let fullName=getFullName('Abhishek','Agarwal');

let expected='Abhishek Agarwal';
console.log(fullName);
if(fullName !== expected){
    throw new Error(`${fullName} is not same as ${expected}`);
}

fullName=getFullName('John','doe');

expected='John doe';
console.log(fullName);
if(fullName !== expected){
    throw new Error(`${fullName} is not same as ${expected}`);
}

/*---- 2nd problem---*/

function totalAmount(amount,taxRate){
    return amount+(amount*taxRate);
}

let result=totalAmount(100,0.5);

let expectedSum=150;
console.log(result);
if(result !== expectedSum){
    throw new Error(`${result} is not same as ${expectedSum}`);
}


result=totalAmount(50,0.5);
expectedSum=75;
console.log(result);
if(result !== expectedSum){
    throw new Error(`${result} is not same as ${expectedSum}`);
}