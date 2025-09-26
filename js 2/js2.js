let n = prompt("Enter your name:");
let a=true;
while (a == true) {
    let y = Number(prompt("Enter your age:"));
    if (y >= 18) {
        alert("Hello " + n + ", you are eligible to vote ");
    } else if (y < 18) {
        alert("Sorry " + n + ", you are not eligible to vote ");
    }
    a=confirm("Do you want to check again?");
    if(a==false){
        alert("Goodbye!");
        break;
    }
}