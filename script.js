let leftArrow = document.querySelector(".leftarrow");
let rightArrow = document.querySelector(".rightarrow ");

let sectionOne = document.querySelector(".section1");

let desktopImages = [
  "images/desktop-image-hero-1.jpg",
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg",
];

let currentIndex = 0; // start at the first image

leftArrow.addEventListener("click", () => {
  // Decrement index and wrap around if needed
  currentIndex =
    (currentIndex - 1 + desktopImages.length) % desktopImages.length;

  sectionOne.style.backgroundImage = `url('${desktopImages[currentIndex]}')`;
  sectionOne.style.backgroundSize = "cover";
      sectionOne.style.backgroundPosition = "center";

  if (currentIndex == 2) {
    sectionOne.style.backgroundPosition = "center";
  }
});

rightArrow.addEventListener("click", () => {
  // Decrement index and wrap around if needed
  currentIndex =
    (currentIndex + 1 + desktopImages.length) % desktopImages.length;

  sectionOne.style.backgroundImage = `url('${desktopImages[currentIndex]}')`;
  sectionOne.style.backgroundSize = "cover";
  if (currentIndex == 2) {
    sectionOne.style.backgroundPosition = "center";
  }
});
