document.addEventListener('DOMContentLoaded', countUp())

function countUp() {
    perSecond = setInterval(function () {
        counter.innerText++;
    }, 1000)
}


plus.addEventListener('click', () => {
    counter.innerText++;
})

minus.addEventListener('click', () => {
    counter.innerText--;
})

pause.addEventListener('click', () => {
    if (pause.innerText === "pause") {
    clearInterval(perSecond);
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.innerText = "resume";
    } else if (pause.innerText === "resume") {
        countUp();
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        pause.innerText = "pause"
    }
})

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let comment = document.createElement('li');
    let input = document.getElementById('comment-input').value;
    let list = document.getElementById('list');
    comment.textContent = input;
    console.log(comment);
    list.append(comment);
})

heart.addEventListener('click', () => {
    let like = document.createElement('li');
    let counterNum = document.getElementById('counter').textContent;
    let likesList = document.querySelector('ul');
    let likesNode = document.createTextNode(likesList);
    like.appendChild(likesNode);
    like.textContent = counterNum + ` was liked!`;
    likesList.appendChild(like);
})