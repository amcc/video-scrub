const totalImages = 61;

function calcDims(identity, container) {
  let width = identity.offsetWidth;
  container.style.height = width * 2 + "px";
}

window.onresize = function () {
  const identity = document.getElementById("identity");
  const container = document.getElementById("identity-container");
  calcDims(identity, container);
};
window.onload = function () {
  const identity = document.getElementById("identity");
  const container = document.getElementById("identity-container");

  calcDims(identity, container);

  for (let i = 0; i < totalImages; i++) {
    let image = document.createElement("img");
    const number = String(i).padStart(2, "0");

    image.setAttribute("src", "./jpegs/single_1" + number + ".jpg");
    image.setAttribute("alt", "RCA 2023 identity");
    i > 0 ? image.classList.add("hide") : image.classList.add("show");
    identity.appendChild(image);
  }

  const elements = [...identity.children];

  let lastKnownScrollPosition = 0;
  let ticking = false;

  function doSomething(scrollPos) {
    let width = identity.offsetWidth;
    let frame = Math.floor((scrollPos / width) * totalImages);

    let seekFrame = frame > totalImages - 1 ? totalImages - 1 : frame;
    // if (frame > totalImages - 1) frame = totalImages - 1;
    console.log(scrollPos);
    for (let i = 0; i < totalImages; i++) {
      if (i === seekFrame) {
        elements[i].classList.add("show");
        elements[i].classList.remove("hide");
      } else {
        elements[i].classList.add("hide");
        elements[i].classList.remove("show");
      }
    }
    if (scrollPos >= width) {
      let pos = scrollPos - width;
      console.log(pos);
      identity.style.top = -pos + "px";
    } else {
      identity.style.top = "0px";
    }
  }

  document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });

      ticking = true;
    }
  });
};
