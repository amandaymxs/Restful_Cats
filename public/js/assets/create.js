

let other = document.querySelector('#other');
let otherInputSpan = document.querySelector('.otherInputSpan');
let otherInput = document.querySelector('.otherInput');

other.addEventListener('click', () => {
    if (other.checked) {
        otherInputSpan.style.display = 'inline';
        otherInput.setAttribute("required", "");
        console.log("show");
    } else {
        otherInputSpan.style.display = 'none';
        otherInput.removeAttribute("required");
        console.log("hide");
    }
})

document.getElementById('submit').onclick = () => {
    let allRequiredFilled = true;
    document.getElementById('adoptionForm').querySelectorAll("[required]").forEach(function (answer) {
        if (!allRequiredFilled) {
            return;
        }

        if ((!answer.value) || (age.value == "") || (gender.value == "") || (otherInput.value == "")) {
            allRequiredFilled = false;
        }
    })
    if (!allRequiredFilled) {
        alert('Information is missing, please review form.')
    } else {
        alert('Completed');
    }
}