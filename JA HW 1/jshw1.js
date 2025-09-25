let s="5";
let n=Number(s);
console.log(n);


const a=90;
switch(true){
    case ( a <= 100 && a >= 90):
    {
        console.log("Grade: A")
        break
    }
    case ( a <= 75 && a >= 89):
        {
            console.log("Grade: B")
            break
        }
    case ( a <= 74 && a >= 50):
        {
            console.log("Grade: C")
            break
        }
    case ( a < 50 ):
        {
            console.log("Grade: Fail")
            break
        }
}