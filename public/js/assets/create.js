let other = document.querySelector('#other');
let otherInputSpan = document.querySelector('.otherInputSpan');
let otherInput = document.querySelector('.otherInput');

let expanded = false;

other.addEventListener('onchange', () => {
    if (other.selected) {
        otherInputSpan.style.display = 'inline';
        otherInput.setAttribute("required", "");
    } else {
        otherInputSpan.style.display = 'none';
        otherInput.removeAttribute("required");
    }
})

let clickOne;
let clickTwo;
let feedbackNum;

let allInputText = document.getElementsByClassName('userInputText');
let allFeedback = document.getElementsByClassName('feedback');

document.addEventListener('click', (e) => {
    //press tab does not verify information
    if ((!clickOne) && (e.target.id != "") && (e.target.type == "text")) {
        clickOne = e.target;
    } else if ((clickOne) && (e.target.id != "") && (e.target.type == "text")) {
        clickTwo = clickOne;
        clickOne = e.target;
        if (clickOne.id != clickTwo.id) {
            let success = '\u2713';
            let fail = '\u2717';
            let num = clickTwo.id.replace(/\D/g, "");
            let fbN = 'feedback' + num;
            let feedbackNum = document.querySelector('#' + fbN);
            if (clickTwo.value.length > 3) {
                feedbackNum.innerText = success;
                feedbackNum.style.color = 'green';
            } else {
                feedbackNum.innerText = fail;
                feedbackNum.style.color = 'red';
            }
        }
    }
})

let backStory = document.getElementById('backStory');

backStory.addEventListener('input', (e) => {
    let feedbackCounter = document.getElementById('counter');
    const target = e.currentTarget;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;
    feedbackCounter.innerText = maxLength - currentLength;
})

function validateForm(e) {
    try {
        error
    } catch (err) {
        console.log(err);
        e.preventDefault();
    }
}