let attempts = 0;
let guess;
let randomNumber;
let history = [];

let input=document.getElementById("guessInput");
input.addEventListener("input",function(){
    this.value=this.value.replace(/[^0-9]/g,"")
})

if (attempts == 0) randomNum();

function randomNum() {
    randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log("Random Number : " + randomNumber);
}

function again() {
    document.getElementById("againButton")
    randomNum();
}

function getRandomNumber() {
    attempts++;
    if (attempts == 3) {
        Swal.fire({
            title: "Your attempts are over!",
            text: "You clicked the button!",
            icon: "error"
        });
        document.getElementById("guessInput").value = "";
        again();

    } else {
        guess = Number(document.getElementById("guessInput").value);
        console.log("Your Guess : " + guess);
        console.log("Attempts : " + attempts);

        if (guess > 10 || guess < 1) {
            Swal.fire({
                text: "Your guessing is not in between 1 and 10!",
                icon: "error"
            });
        } else if (guess < randomNumber) {
            Swal.fire({
                text: "Your guessing is less than the random number",
                icon: "error"
            });
        } else if (guess > randomNumber) {
            Swal.fire({
                text: "Your guessing is greater than the random number",
                icon: "error"
            });
        } else if(guess==randomNumber) {
            Swal.fire({
                text: "Correct Guess!",
                icon: "success"
            });

            again();
        }

        document.getElementById("guessInput").value = "";
        console.log("");
    }
    loadHistory();
}

function loadHistory() {
    history.push({
        noOfAttempts: attempts,
        guessNo: guess
    });

    let header = `<tr>
        <th>Attempts</th>
        <th>Guess Number</th>
    </tr>`;

    for (let data of history) {
        document.getElementById("history").innerHTML = "";
        header+= `
        <tr>
            <th>${data.noOfAttempts}</th>
            <th>${data.guessNo}</th>
        </tr>
        `;
        document.getElementById("history").innerHTML=header;
    }

    if(attempts==3) attempts = 0;

}