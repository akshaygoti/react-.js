console.log("Wlcome to Javascript");

var number1=20;
var number2=20;
var number3=30;
console.log(number1+number2-number3);


{
    var newelement = document.createElement("p");
    newelement.textContent="hello world h2";
    document.body.appendChild(newelement);

    var newelement = document.createElement("h3");
    newelement.textContent="how are you h3";
    document.body.appendChild(newelement);

    var newelement = document.createElement('h2');
    newelement.textContent="This is JAvascript";
    document.body.appendChild(newelement)
}

// template literals

// var _namesone =20-20 -'5';
// var _namestow ='5';
// console.log(_namesone)
// console.log(type(_namesone));

// var one=20
// var tow=40

// var three="one 'two'"
// console.log(three);



/*Declaration var()*/

// This is Global Variables

var z = 40;
{
    var x = 20;
    console.log(x);
}

var y = 70;
var z = 80;
console.log(y,z);


/* Declaration let() */

// This is Block-scope variables

{
    // let x = "hello";
    let x = 'java';
    x = "Javascript"
    console.log(x);
}

{ 
    let x = 'sun' 
    console.log(x);
}

{
    let y = 'This day to Javascript'
    console.log(y)
}

/* Declaration const() */

{const z = 30;
console.log(z);}

/* String with quotes */

let x = "wor'ld";
console.lon(x);


