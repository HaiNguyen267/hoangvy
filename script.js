const body = document.querySelector("body")

const screen1 = document.getElementById("introduction")
const screen2 = document.getElementById("attempt-quiz")
const screen3 = document.getElementById("review-quiz")

const btnStart = document.getElementById("btn-start")
const btnSubmit = document.getElementById("btn-submit")
const btnTryAgain = document.getElementById("btn-try-again")


// const labels = document.querySelectorAll("label")
// labels.forEach(label => {
//     label.addEventListener("click", e => {
//         // if there is any other selected option, unselect it
//         let optionSelected = document.querySelector(".option-selected")
//         if (optionSelected) {
//             optionSelected.classList.remove("option-selected")
//         }
//         // select the clickde option
//         e.currentTarget.classList.add("option-selected")
//     })
// })

// better alternative for above commented code
const answers = document.querySelectorAll("#attempt-quiz  .answer")
for (let answer of answers) {
    let options = document.querySelectorAll(`#${answer.id} .option`)

    for (let option of options) {
        option.addEventListener("click", (e) => {
            let selectedOption = document.querySelector(`#${answer.id}  .option-selected`)
            if (selectedOption) {
                selectedOption.classList.remove("option-selected")
            }
            console.log("Clicked");
            e.currentTarget.classList.add("option-selected")
        })
    }
}

btnStart.addEventListener("click", startQuiz);
btnSubmit.addEventListener("click", submitAnswer);
btnTryAgain.addEventListener("click", tryQuizAgain);

function startQuiz() {
    body.scrollIntoView({block: "start"})
    screen1.classList.add("hidden")
    screen2.classList.remove("hidden")
}

function submitAnswer() {

    if (confirm("Are you sure you want to submit answer?") == true) {

        body.scrollIntoView({block: "start"})
        screen2.classList.add("hidden")
        screen3.classList.remove("hidden")
    }

    
}

function tryQuizAgain() {
    body.scrollIntoView({block: "start"})
    unselecteAllTheCheckedRadio();
    screen3.classList.add("hidden")
    screen1.classList.remove("hidden")
}

function unselecteAllTheCheckedRadio() {
    // uncheck all checked radio buttons
    let checkedRadios = document.querySelectorAll("input[type='radio']:checked")
    checkedRadios.forEach(radio => {
        radio.checked = false
    })

    // remove background of all checked radio buttons
    let selectedOptions = document.querySelectorAll(".option-selected")
    selectedOptions.forEach(option => {
        option.classList.remove("option-selected")
    })
}