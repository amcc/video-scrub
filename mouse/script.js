const totalImages = 61;

window.onload = function () {
  const container = document.getElementById("identity-container");
  for (let i = 0; i < totalImages; i++) {
    let image = document.createElement("img");
    const number = String(i).padStart(2, "0");

    image.setAttribute("src", "./jpegs/single_1" + number + ".jpg");
    image.setAttribute("alt", "RCA 2023 identity");
    i > 0 ? image.classList.add("hide") : image.classList.add("show");
    container.appendChild(image);
  }

  const elements = [...container.children];

  container.addEventListener("mousemove", function (event) {
    let x = event.clientX;
    let y = event.clientY;
    let width = container.clientWidth;
    let frame = Math.floor((x / width) * totalImages);
    if (frame > totalImages - 1) frame = totalImages - 1;
    // console.log(frame);

    for (let i = 0; i < totalImages; i++) {
      if (i === frame) {
        elements[i].classList.add("show");
        elements[i].classList.remove("hide");
      } else {
        elements[i].classList.add("hide");
        elements[i].classList.remove("show");
      }
    }

    // console.log(elements);
  });
};
