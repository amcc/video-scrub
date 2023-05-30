window.addEventListener("DOMContentLoaded", () => {
  let myVideo = document.getElementById("video");
  myVideo.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    let width = myVideo.clientWidth;
    let height = myVideo.clientHeight;
    let duration = myVideo.duration;

    let scrubTime = (x / width) * duration;
    myVideo.currentTime = scrubTime;
  });
});
