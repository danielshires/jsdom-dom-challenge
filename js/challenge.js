const counterEl = document.querySelector("h1#counter")
const minusButton = document.querySelector("button#minus")
const plusButton = document.querySelector("button#plus")
const pauseButton = document.querySelector("button#pause")
const likeButton = document.querySelector("button#heart")
const commentList = document.querySelector("div#list")
const commentForm = document.querySelector("form#comment-form")

let counter = 0

let likeArray = []

minusButton.addEventListener("click", function() {
    counterEl.innerHTML = parseInt(counter -= 1)
})

plusButton.addEventListener("click", function() {
    counterEl.innerHTML = parseInt(counter += 1)
})

likeButton.addEventListener("click", function() {
    const ulList = document.querySelector(".likes")
    const liEl = document.createElement("li")
    likeArray.push(counter)

    let countNumber = likeArray.filter(e => {
        return e === counter
    })

    console.log(countNumber)

    if (countNumber.length <= 1) {
        liEl.innerHTML = `${counterEl.innerHTML} has been liked ${countNumber.length} time.`
    } else {
        liEl.innerHTML = `${counterEl.innerHTML} has been liked ${countNumber.length} times.`
    }

    ulList.appendChild(liEl)

})

function startTimer() {

    let paused = false

    let clockInterval = setInterval(function() {
        counterEl.innerHTML = counter += 1
    }, 1000)

    pauseButton.addEventListener("click", function() {
        if (paused === false) {
            clearInterval(clockInterval)
            pauseButton.innerHTML = "resume"
            minusButton.disabled = true
            plusButton.disabled = true
            likeButton.disabled = true
            paused = true
        } else if (paused === true) {
            pauseButton.innerHTML = "pause"
            minusButton.disabled = false
            plusButton.disabled = false
            likeButton.disabled = false
            clockInterval = setInterval(function() {
                counterEl.innerHTML = counter += 1
            }, 1000)
            paused = false
        }
    })
}

commentForm.addEventListener("submit", function(e) {
    e.preventDefault()
    const pEl = document.createElement("p")
    commentList.appendChild(pEl)
    pEl.innerHTML = e.target.elements.comment.value
    e.target.elements.comment.value = ''
})

document.addEventListener("DOMContentLoaded", function() {
    startTimer()
})

// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons. 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."