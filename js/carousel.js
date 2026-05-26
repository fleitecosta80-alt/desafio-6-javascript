let carouselArr = [];

class Carousel {
  // construtor
  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }

  static Start(arr) {
    if (arr) {
      if (arr.length > 0) {
        Carousel._sequence = 0;

        Carousel._size = arr.length;

        Carousel.Next();

        Carousel._interval = setInterval(function () {
          Carousel.Next();
        }, 5000);
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next() {
    let item = carouselArr[Carousel._sequence];

    let carousel = document.getElementById("carousel");

    carousel.innerHTML = `
        
            <img 
                src="img/${item.image}" 
                class="carousel-image"
            >
        
        `;

    let title = document.getElementById("carousel-title");

    title.innerHTML = `
        
            <a href="${item.url}">
                ${item.title}
            </a>
        
        `;

    title.style.textAlign = "center";
    title.style.marginTop = "10px";
    title.style.fontWeight = "bold";

    Carousel._sequence++;

    if (Carousel._sequence >= Carousel._size) {
      Carousel._sequence = 0;
    }
  }

  static Prev() {
    Carousel._sequence--;

    if (Carousel._sequence < 0) {
      Carousel._sequence = Carousel._size - 1;
    }

    Carousel.Next();
  }
}
