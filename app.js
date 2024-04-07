const bigImgContainer = document.getElementById("big-image-container");
const smallImgContainer = document.getElementById("small-image-container");
const heading = document.getElementById("heading");
const subHeading = document.getElementById("sub-heading");

const images = [
  {
    url: "./assets/NGC5264.jpg",
    alt: "Stars in space within a galaxy",
    title: "NGC 5264",
    subtitle:
      "The glow of distant stars within a dwarf galaxy, located just over 15 million light-years away in the constellation of Hydra.",
  },
  {
    url: "./assets/W40.jpg",
    alt: "Red nebula of gas and dust in space",
    title: "W40",
    subtitle:
      "This nebula is a giant cloud of gas and dust in space where new stars may form. The nebula's two wings are giant bubbles of hot, interstellar gas blowing from the hottest, most massive stars in this region.",
  },
  {
    url: "./assets/Abell1689.jpg",
    alt: "Cluster of galaxies in space",
    title: "Abell 1689",
    subtitle:
      "The inner region of Abell 1689, an immense cluster of galaxies, is located 2.2 billion light-years away. The cluster gravitational field is warping light from background galaxies, causing them to appear as arcs.",
  },
  {
    url: "./assets/NGC6503.jpg",
    alt: "Galaxy in space",
    title: "NGC 6503",
    subtitle:
      "This galaxy has found itself in a lonely position at the edge of a strangely empty patch of space called the Local Void.",
  },
  {
    url: "./assets/OmegaNebula.jpg",
    alt: "Red and blue gas and clouds in space",
    title: "Omega Nebula",
    subtitle:
      "The center of the Omega Nebula is a hotbed of newly born stars wrapped in colorful blankets of glowing gas, cradled within an enormous, cold, dark hydrogen cloud.",
  },
];

//create small images and text content
function createThumbnail() {
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    img.tabIndex = 0; //allows user to tab through small images
    smallImgContainer.appendChild(img); //place image in container
    heading.textContent = image.title;
    subHeading.textContent = image.subtitle;
    //display image when button is clicked
    img.addEventListener("click", function () {
      createDisplay(image);
    });
    // display image when user presses enter
    img.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        createDisplay(image);
      }
    });
    //change focus with right and left keys
    img.addEventListener("keydown", function (event) {
      //if right arrow is pressed
      if (event.key === "ArrowRight") {
        //focus next image
        const nextImg = img.nextElementSibling;
        if (nextImg) {
          nextImg.focus();
          //else focus first image
        } else {
          const firstImg = smallImgContainer.firstElementChild;
          firstImg.focus();
        }
      } else if (event.key === "ArrowLeft") {
        const prevImg = img.previousElementSibling;
        if (prevImg) {
          prevImg.focus();
        } else {
          const lastImg = smallImgContainer.lastElementChild;
          lastImg.focus();
        }
      }
    });
  });
}

//create display
function createDisplay(image) {
  bigImgContainer.innerHTML = ""; //set main image content to nothing
  const displayImg = document.createElement("img");
  displayImg.src = image.url;
  displayImg.alt = image.alt;
  bigImgContainer.appendChild(displayImg); //place image in container
  heading.textContent = image.title;
  subHeading.textContent = image.subtitle;
}

//run functions
createThumbnail();
createDisplay(images[0]);

//cat in space API

//get image and button from html
const catImg = document.getElementById("cat-image");
const catBtn = document.getElementById("cat-button");

//when button is clicked, bring the image to the front and run image function
catBtn.addEventListener("click", function () {
  catImg.style.zIndex = 0;
  addCatToPage();
});

//fetch api, await json, wrangle data[0]._id, generate a random url so that cat image changes when clicked, return wrangled data
async function getCats() {
  const response = await fetch("https://cataas.com/api/cats?limit=1");
  const data = await response.json();
  const apiCat = data[0]._id;
  console.log(apiCat);
  const randomParam = Math.random();
  const url = "https://cataas.com/cat?random=" + randomParam + "&id=";
  const wrangledData = url + apiCat;
  return wrangledData;
}

//add src and alt to cat image
function displayCats(cat) {
  catImg.src = cat;
  catImg.alt = "cute cat";
}

//run displaycats function with mycatdata variable
async function addCatToPage() {
  const myCatData = await getCats();
  displayCats(myCatData);
}
