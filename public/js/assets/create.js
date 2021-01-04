

let other = document.querySelector('#other');
let otherInput = document.querySelector('.otherInput');

other.addEventListener('click', () => {
    if (other.checked) {
        otherInput.style.display = 'inline';
        otherInput.setAttribute("required", "");
        console.log("show");
    } else {
        otherInput.style.display = 'none';
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

        if (!answer.value) {
            allRequiredFilled = false;
        }

        if ((age.value == "") || (gender.value == "")) {
            allRequiredFilled = false;
        }
    })
    if (!allRequiredFilled) {
        alert('Information is missing, please review form.')
    }
}