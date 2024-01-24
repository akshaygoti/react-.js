console.log("Wlcome to Javascript");

{

}
// var number1=20;
// var number2=20;
// var number3=30;
// console.log(number1+number2-number3);


// {
//     var newelement = document.createElement("p");
//     newelement.textContent="hello world h2";
//     document.body.appendChild(newelement);

//     var newelement = document.createElement("h3");
//     newelement.textContent="how are you h3";
//     document.body.appendChild(newelement);

//     var newelement = document.createElement('h2');
//     newelement.textContent="This is JAvascript";
//     document.body.appendChild(newelement)
// }

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

// var z = 40;
// {
//     var x = 20;
//     console.log(x);
// }

// var y = 70;
// var z = 80;
// console.log(y,z);


/* Declaration let() */

// This is Block-scope variables

{
    // let x = "hello";
//     let x = 'java';
//     x = "Javascript"
//     console.log(x);
// }

// { 
//     let x = 'sun' 
//     console.log(x);
// }

// {
//     let y = 'This day to Javascript'
//     console.log(y)
}

/* Declaration const() */

// {const z = 30;
// console.log(z);}

/* String with quotes */


// let x = "wor'ld";
// console.lon(x);

{
    // let x = "wor'ld";
    // let y = 'wor"ld';
    // let z = "wor\"ld";
    // document.write(x + "<br>" + y + "<br>" + z);
    // console.log(y + "<br>");

    // let string1  = "He'llo"
    // console.log(string1);

    // let string2  = 'He"llo'
    // console.log(string2);

    // let string3  = "He\"llo"
    // console.log(string3);  
    // let string4  = 'He\'llo'
    // console.log(string4);

    // let string5  = "H\ne\n\l\nl\no"
    // console.log(string5);

    // let string6  = "He\t\t\tllo"
    // console.log(string6);
}

// {
//     const x , y; 
//     const x = 20;
//     const y = 40;

//     console.log(x);
// }


//   quotation 1
// {
//     const x1 = 1 + 2 * 3;
//     console.log(x1);
//     const x2 = 1 + "2" * 3;
//     console.log(x2);
//     const x3 = "1" + "2" * 3;
//     console.log(x3);
// }

// quotation 2
{
//     const a1 = 1 + 2 ** 3 / 2 - 1
//     console.log(a1);
//     const a2 = 9/2*3;
//     console.log(a2);
//     const a3 = 9 / (2 * 3);
//     console.log(a3);
 }

// quotition 3
// {
//     const b1 = x = 1; x++; alert(x);
//     console.log(b1);
//     const b2 = x = 1; alert(++x);
//     console.log(b2);
//     const b3 = x = 1; alert(x++);
//     console.log(b3);
// }

// quotition 5
// {
//     const c1 = true && false;
//     console.log(c1);
//     const c2 = !(true && false);
//     console.log(c2);
// }

// quotition 6
// {
//     var string1 = "123";
//     var intvalue = 123;
//     console.log(string1+intvalue);
// }

// Arithmetic Opreter

// let a = 4;
// let b = 2;

// console.log(a + b);

// console.log(a - b);

// console.log(a * b);

// console.log(a / b);

// console.log(a % b);

// console.log(a ** b);

// console.log(a++);
// console.log(++a);

// console.log(b++);
// console.log(++b);

// console.log(a--);
// console.log(--a);

// console.log(b--);
// console.log(--b);

// ********************************************


// program 1

// Check if a number is odd or even in JavaScript

// const number = 10;

//check if the number is even

// if(number % 2 == 0) {
//     console.log("The number is even.");
// }

// // chack if the number is odd

// else {
//     console.log("The number is odd.");
// }


// program 2

// {
//     number1 = 10;
//     number2 = 20;

// if (number1 > number2) {
//     console.log(" bigger = number1");
// }

// else{
//     console.log("bigger = number2");
// }

// }



// program 3

//  Number + Number => Addition 
// let x = 1 + 2 
// console.log(x) 

//  Number + String => Concatenation 
// let y = 5 + "hello"
// console.log(y) 

// let z = 10;
// let x = 20;

// document.write(z+x +"<br>");

// document.write(z-x +"<br>");

// document.write(z*x +"<br>");

// document.write(z/x +"<br>");

// document.write(z%x +"<br>");

// document.write(z**x +"<br>");

// document.write(z++ +"<br>");
// document.write(++z +"<br>");

// document.write(x++ +"<br>");
// document.write(++x +"<br>");

// document.write(z-- +"<br>");
// document.write(--z +"<br>");

// document.write(x-- +"<br>");
// document.write(--x +"<br>");

// program 4

// let marks=79;

// if(marks>=90){
//     console.log("Grade A");
// }

// else if(marks>=80){
//     console.log("Grade B");
// }

// else if(marks>=70){
//     console.log("Grade C");
// }

// else if(marks>=60){
//     console.log("Grade D");
// }

// else{
//     console.log("You are fail");
// }


/* Javascript Loops */

// Javascript while Loop //


// let i = 0; //

// {
//     let counter = 0;

//     while(counter < 10){
//         document.write("hello" +"<br>");
//         counter++;
//     }
//     while(i<=5){

//         document.write("hello javasript" +"<br>");
//         i++;
//     }
// }

// {
//     let counter = 0;
//     let sum = 0;
    
//     while(counter <= 80){
//         if(counter % 2 == 0){
//             sum = sum + counter;
//         }
//         counter++;
//     }
//     document.write(sum);
// }

// Javascript do while loop

// let i = 0;
// {
//     let counter = 1;
//     do{
//         document.write("hello" +"<br>");
//         counter++;

//     } 
//     while(counter < 12);
//     {
//         do{
//             document.write("number:-"+ i + "<br>");
//             i++;
//         }
//         while(i<=6)
//     }

// }


// javascript for loop

// {
//     for(i=0; i<=10; i++){
//         document.write("hello" + "<br>")
//     }
//     let i = -2;
//     for(i; i<=0; i++){
//         document.write("hello" +"<br>")
//     }
// }


// {
//     let i = -2;

//     for (i=0; i<=10; i++){  
//     document.write("hello" + "<br/>")  ;
//     }  
//     for(i; i<0; i++){
//         document.write("hello" + "<br>")
//     }
// }

// {
//     for (let i= 0; i<=5 ; i++) {
//         document.write('Walking east one step' + "<br>");
//       }
// }


//                   Loop                    //

// program 03

// let x = 1;
// let y = 3;

// while(x<=10){
//     document.write(y + "\tx\t" + x + "\t=" + x*y);
//     document.write("<br>"); 
//     x++;
// }


// program 1


// let i;
// i = 10
// while (i>=0){
  
//     console.log(i);
//     i--;
// }

// program 2

// {
//     let x = 1;
//     let y = 0;
    
//     while(x<=10){
//         y = y + x;
//         document.write(x);
//         document.write("<br>");
//         x++;
//     }
//     document.write("total:-\t\t",y);

// }


// program 5

// {
//      let x ;
//     let y = 0;
//     let c=1;

//     document.write(y + "<br>");
//     for(let i=0; i<=5; i++)
//     {
//         x=y+c;
//         y=c;
//         c=x;
//         document.write(x + "<br>");   
//     }
// }


// program 6
{
    let n=6, i=1, fact=1

    while(i<=n)
    {
        fact = fact * i
        i++
    }
    document.write(fact);
    document.write("<br>")

    for(i=1;i<=n;i++)
    {
        fact=fact*i
    }
    document.write(fact);
}

