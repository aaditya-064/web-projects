// sum(1, 2);


// function sum(a, b){
//     console.log(a + b);
// }

function check(a, b) {
    const sum = a + b;
    if (sum < 20){
        document.body.innerHTML= "NotCorrect"
    }
    else {
        document.body.innerHTML= "correct"
    }
}

check(20, 10);

