let backStory = document.getElementById('backStory');
let allFeedback = document.getElementsByClassName('feedback');
let feedbackCounter = document.getElementById('counter');


backStory.addEventListener('input', (e) => {
    const target = e.currentTarget;
    const maxLength = target.getAttribute("maxlength");
    const currentLength = target.value.length;
    feedbackCounter.innerText = maxLength - currentLength;
})
