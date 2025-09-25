let num = "11"
let a = Number(num)

if ( a % 2 == 0)
{
    console.log("Even")
}
else{
    console.log("Odd")
}

let b = 7
switch (true){
    case ( b <= 5 && b >= 1 ):
        {
            console.log("It's a weekday")
            break
        }
    case ( b == 6 || b == 7):
        {
            console.log("It's the weekend ")
            break
        }
}