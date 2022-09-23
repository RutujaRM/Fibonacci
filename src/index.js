import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Fibonacci !</h1>
<div>
 
</div>
`;
/*
 In Fobonancci series we add values each other 
   so, means in ans we add its previous value
   
   num1 + num2 =temp

     0+1=1  //shift values num2 as num1 temp as num2
     1+1=2
     1+2=3
     2+3=5


*/
//

const button = document.getElementById("btn");
button.addEventListener("click", (_) => {
  let num1 = 0, //starting values
    num2 = 1, //starting values
    ans;

  const num = parseInt(prompt("Enter Number :- "));
  // document.write("fibbonaccie series  is :- ");
  let head = document.getElementById("h3");
  head.innerText = `Fibonnaci Series is :- `;
  for (let i = 1; i <= num; i++) {
    document.write(" <br> " + num1); // print the n1

    ans = num1 + num2; // 0+1 =1

    num1 = num2; //swaping num2 value assign to num1
    num2 = ans; // ans assign to num2
  }
});

button.style.color = "white";
button.style.backgroundColor = "crimson";
button.style.height = "3rem";
button.style.width = "15rem";
button.style.fontSize = "1.5rem";
button.style.boxShadow = "0.5rem 0.5rem 0.5rem black";
button.style.borderRadius = "1rem";
