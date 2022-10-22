
var obj1 = {name1:"Person 1",age:5};
var obj2 = {age:5,name1:"Person 1"};

if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    console.log("true");
}else{
    console.log("False");
};
