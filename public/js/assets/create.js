

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
    if ((!clickOne) && (e.target.id != "")) {
        clickOne = e.target;
    } else {
        clickTwo = clickOne;
        clickOne = e.target;
        if (clickOne.id != clickTwo.id) {
            console.log(clickTwo.value);
            console.dir(clickTwo);
            // }
        }

    }
})


// document.getElementById('submit').onclick = () => {
//     let allRequiredFilled = true;
//     document.getElementById('adoptionForm').querySelectorAll("[required]").forEach(function (answer) {
//         if (!allRequiredFilled) {
//             return;
//         }

//         if ((!answer.value) || (age.value == "") || (gender.value == "") || (otherInput.value == "")) {
//             allRequiredFilled = false;
//         }
//     });
//     if (!allRequiredFilled) {
//         alert('Information is missing, please review form.');
//         return;
//     } else {
//         alert('Submitted');
//     }
// }