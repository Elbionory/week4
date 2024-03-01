

const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");
let start = false;
function togglePlay() {
    video.paused ? video.play() : video.pause()
}
function updateButton() {
    toggle.textContent = this.paused ? '►' : ' ❚❚'
}
function skip() {
    video.currentTime += +this.dataset.skip
}
function handleRange() {
    video[this.name] = this.value
}
function updateProgress() {
    const rangeProgress = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${rangeProgress}%`
}
function resizeProgress(e) {
    if (start == true) {
        const ProgressLength = (e.offsetX / progress.offsetWidth);
        video.currentTime = ProgressLength * video.duration
    }
}

toggle.addEventListener("click", togglePlay)
video.addEventListener("click", togglePlay)
video.addEventListener("pause", updateButton)
video.addEventListener("play", updateButton)
video.addEventListener("timeupdate", updateProgress)
for (skipbtn of skipButtons) {
    skipbtn.addEventListener("click", skip);
}
for (range of ranges) {
    range.addEventListener("change", handleRange)
}

progress.addEventListener('mousedown', () => {
        start = !start;
})

progress.addEventListener('mouseup', () => {
        start = !start;
})


progress.addEventListener('mousemove', resizeProgress)