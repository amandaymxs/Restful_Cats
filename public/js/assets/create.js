

let other = document.querySelector('#other');
let otherInput = document.querySelector('.otherInput');

other.addEventListener('click', () => {
    if (other.checked) {
        otherInput.style.display = 'inline';
        console.log("show");
    } else {
        otherInput.style.display = 'none';
        console.log("hide");
    }
    // (other.checked ? (otherInput.style.visibility = "show") && console.log("Show")
    //  : (otherInput.style.visibility = "hidden") && console.log("Hide"));
})