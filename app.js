const bigImgContainer = document.getElementById("big-image-container");
const smallImgContainer = document.getElementById("small-image-container");

const images = [
  {
    url: "./assets/earth-from-space.webp",
    alt: "First televised picture of earth from space",
  },
  {
    url: "./assets/craters-on-mars.webp",
    alt: "Craters on Mars",
  },
  {
    url: "./assets/voyager.webp",
    alt: "Voyager Interstellar Record",
  },
  {
    url: "./assets/man-on-moon.webp",
    alt: "Astronaught on the Moon",
  },
  {
    url: "./assets/galaxies.webp",
    alt: "Many galaxies within space",
  },
];

//create small images
function createThumbnail() {
  images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    img.tabIndex = 0; //allows user to tab through small images
    smallImgContainer.appendChild(img); //place image in container
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
}

//run functions
createThumbnail();
createDisplay(images[0]);

//Title - description
//First TV image of earth from orbit. 1960. - The first weather satellite, TIROS 1, was equipped with television cameras that photographed Earth’s cloud cover.
//Craters on Mars, 1965. - The first close-up of Mars, taken by the passing Marner 4 spacecraft.
//Voyager Interstellar Record, 1977. - Analog record of sights and sounds from Earth sent out into space, as a message to any civilization that might some day encounter it.
//Buzz Aldrin on the moon, 1969. - Buzz Aldrin was omongst one of the first people to walk on the moon. The first, Neil Armstrong, is reflected in Alrin's visor.
//Hubble Ultra Deep Field, 2004. - The deepest view ever taken f the night sky in visible wavelenghts, showing more than 10,000 galaxies.

//https://api.thecatapi.com/v1/images/search
