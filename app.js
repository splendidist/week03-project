const mainImg = document.getElementById("mainImg");
const thumbImg = document.getElementById("thumbImg");

//make an array of image objects

const images = [
  {
    url: "https://th-thumbnailer.cdn-si-edu.com/mbh7suky2EzbdFhK_SCe-1aIbGg=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/NASA50_520_32_ON08.jpg",
    alt: "First televised picture of earth from space",
  },
  {
    url: "https://th-thumbnailer.cdn-si-edu.com/S2Vv9bxS2G-WfLMrsOyfKSTJpps=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/NASA50_520_26_ON08.jpg",
    alt: "Craters on Mars",
  },
  {
    url: "https://th-thumbnailer.cdn-si-edu.com/-a0NZPqyOMuqYpeVR-Wxa80VHVE=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/NASA50_520_49_ON08.jpg",
    alt: "Voyager Interstellar Record",
  },
  {
    url: "https://th-thumbnailer.cdn-si-edu.com/ee1edk0n6zgih_IDwcvmGc4AAx0=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/NASA50_520_03_ON08.jpg",
    alt: "Astronaught on the Moon",
  },
  {
    url: "https://th-thumbnailer.cdn-si-edu.com/-bEkRxoQYd30pk6fPW4VHhUaZl0=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/NASA50_520_13_ON08.jpg",
    alt: "Many galaxies within space",
  },
];

//Title - description
//First TV image of earth from orbit. 1960. - The first weather satellite, TIROS 1, was equipped with television cameras that photographed Earth’s cloud cover.
//Craters on Mars, 1965. - The first close-up of Mars, taken by the passing Marner 4 spacecraft.
//Voyager Interstellar Record, 1977. - Analog record of sights and sounds from Earth sent out into space, as a message to any civilization that might some day encounter it.
//Buzz Aldrin on the moon, 1969. - Buzz Aldrin was omongst one of the first people to walk on the moon. The first, Neil Armstrong, is reflected in Alrin's visor.
//Hubble Ultra Deep Field, 2004. - The deepest view ever taken f the night sky in visible wavelenghts, showing more than 10,000 galaxies.

//create thumbnails
function createThumbnail() {
  images.forEach(function (image) {
    const img = document.createElement("img");
    //set src and alt
    img.src = image.url;
    img.alt = image.alt;
    //place img in div
    thumbImg.appendChild(img);
    //button event to display big image
    img.addEventListener("click", function () {
      createDisplay(image);
    });
  });
}

//create display
function createDisplay(image) {
  //set main image content to nothing
  mainImg.innerHTML = "";
  const displayImg = document.createElement("img");
  //set image src and alt
  displayImg.src = image.url;
  displayImg.alt = image.alt;
  //place image in div
  mainImg.appendChild(displayImg);
}

//run functions
createThumbnail();
createDisplay(images[0]);
