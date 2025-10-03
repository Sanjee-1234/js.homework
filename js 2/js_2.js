
let x = prompt("Enter your username:");
let y = prompt("Enter your password:");
let z;

if (x == "library" && y == "book123") {
    let proceed = confirm("Do you want to borrow a book ?");
    if (proceed) {
        let z = prompt("Select a category:\n1. Fiction\n2. Science\n3. History");
        switch (z) {
            case "1":{
                alert("You selected Fiction");
                break;}
            case "2":{
                alert("You selected Science");
                break;}
            case "3":{
                alert("You selected History");
                break;}
        }
    }
    else{
        alert("Maybe next time! Goodbye!");
    }
}
else{
    alert("Invalid login!");
}