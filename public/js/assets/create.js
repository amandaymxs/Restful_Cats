

let other = document.querySelector('#other');
let otherInputSpan = document.querySelector('.otherInputSpan');
let otherInput = document.querySelector('.otherInput');

other.addEventListener('click', () => {
    if (other.checked) {
        otherInputSpan.style.display = 'inline';
        otherInput.setAttribute("required", "");
    } else {
        otherInputSpan.style.display = 'none';
        otherInput.removeAttribute("required");
    }
})
let clickOne;
let clickTwo;

document.addEventListener('click', (e) => {
    if ((!clickOne) && (e.target.id != "") && (e.target.type == "text" | "backStory")) {
        clickOne = e.target;
    } else if ((clickOne) && (e.target.id != "") && (e.target.type == "text")) {
        clickTwo = clickOne;
        clickOne = e.target;
        if (clickOne.id != clickTwo.id) {
            console.log(clickOne.id, clickTwo.id);
            if (clickTwo.value.length < 4) {
                console.log("Error", clickTwo.value.length);
            }
        } else {

        }

    }
})

let backStory = document.getElementById('backStory');

backStory.addEventListener('input', (e) => {
    let feedbackCounter = document.getElementsByClassName('counter');
    const target = e.currentTarget;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;
    feedbackCounter[0].innerText = maxLength - currentLength;
})

document.getElementById('submit').addEventListener('', () => {
    let allRequiredFilled = true;
    document.getElementById('adoptionForm').querySelectorAll("[required]").forEach(function (answer) {
        if (!allRequiredFilled) {
            return;
        } else if ((!answer.value) || (age.value == "") || (gender.value == "") || (otherInput.value == "")) {
            allRequiredFilled = false;
        }
    });
    if (allRequiredFilled) {
        console.log('removed')
        document.getElementById('submit').removeAttr('disabled');
    }
})

