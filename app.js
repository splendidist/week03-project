const bigImgContainer = document.getElementById("big-image-container");
const smallImgContainer = document.getElementById("small-image-container");
const heading = document.getElementById("heading");
const subHeading = document.getElementById("sub-heading");

const images = [
  {
    url: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000233/GSFC_20171208_Archive_e000233~medium.jpg",
    alt: "First televised picture of earth from space",
    title: "NGC 5264",
    subtitle:
      "The glow of distant stars within a dwarf galaxy, located just over 15 million light-years away in the constellation of Hydra.",
  },
  {
    url: "https://images-assets.nasa.gov/image/PIA23121/PIA23121~medium.jpg",
    alt: "Craters on Mars",
    title: "W40",
    subtitle:
      "This nebula is a giant cloud of gas and dust in space where new stars may form. The nebula's two wings are giant bubbles of hot, interstellar gas blowing from the hottest, most massive stars in this region.",
  },
  {
    url: "https://images-assets.nasa.gov/image/PIA13339/PIA13339~medium.jpg",
    alt: "Voyager Interstellar Record",
    title: "Abell 1689",
    subtitle:
      "The inner region of Abell 1689, an immense cluster of galaxies, is located 2.2 billion light-years away. The cluster gravitational field is warping light from background galaxies, causing them to appear as arcs.",
  },
  {
    url: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000710/GSFC_20171208_Archive_e000710~medium.jpg",
    alt: "Astronaught on the Moon",
    title: "NGC 6503",
    subtitle:
      "This galaxy has found itself in a lonely position at the edge of a strangely empty patch of space called the Local Void.",
  },
  {
    url: "https://images-assets.nasa.gov/image/0203048/0203048~medium.jpg",
    alt: "Many galaxies within space",
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
