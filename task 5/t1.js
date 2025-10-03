let name=prompt("Enter your Name");
let email=prompt("Enter email");
let age=prompt("Enter your Age");

if(age>=12 && name==name && email==email ){
    alert("you can participitate in the quiz");
    let score=0;
    const questions = [
        { q: "What is the capital of France?\n1. Paris\n2. London\n3. Rome", a: "1" },
        { q: "Which planet is known as the Red Planet?\n1. Earth\n2. Mars\n3. Jupiter", a: "2" },
        { q: "Who wrote 'Hamlet'?\n1. Charles Dickens\n2. William Shakespeare\n3. Mark Twain", a: "2" },
        { q: "What is the boiling point of water?\n1. 100°C\n2. 90°C\n3. 80°C", a: "1" },
        { q: "Which is the largest ocean?\n1. Atlantic\n2. Indian\n3. Pacific", a: "3" },
        { q: "What is the answer for 5*5?\n1. 4\n2. 25\n3. 36", a: "2" },
        { q: "Which is the National animal of India?\n1. Tiger\n2. Cheetah\n3. Lion", a: "1" },
        { q: "How many states are there in India?\n1. 30\n2. 25\n3. 28", a: "3" },
        { q: "What is H2O commonly known as?\n1. Salt\n2. Water\n3. Oxygen", a: "2" },
        { q: "Which continent is Egypt in?\n1. Africa\n2. Asia\n3. Europe", a: "1" }
    ];
    const shuffled=questions.sort(()=>0.5-  Math.random());
    const selected = shuffled.slice(0,3);
    for (let i=0;i<selected.length;i++){
        let userAnswer=prompt(selected[i][Object.keys(selected[i])[0]]);
        if(userAnswer===selected[i].a){
            score++;
        }
    }
    
    
    let totalMarks = 3;
    let percentage = +((score / totalMarks) * 100);
    let grade = '';
    if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 40) {
        grade = 'C';
    } else {
        grade = 'D';
    }



    alert("Score: " + score + "/3\nPercentage: " + Math.round(percentage) + "%\nGrade: " + grade);



    const userInfo = {
    name: name,
    email: email,
    Age: age,
    Score: score,
    Percentage:Math.round(percentage),
    Grade: grade
};



alert(JSON.stringify(userInfo));






}
else{
    alert ("Invalid input");
}

