


let carouselArr = [];

// class Carousel
class Carousel {

    // construtor
    constructor(image, title, url){

        this.image = image;
        this.title = title;
        this.url = url;

    }

    
    static Start(arr){

        if(arr){

            if(arr.length > 0){

                Carousel._sequence = 0;

                Carousel._size = arr.length;

                // inicia
                Carousel.Next();

                // intervalo 5 segundos
                Carousel._interval = setInterval(function(){

                    Carousel.Next();

                }, 5000);

            }

        } else {

            throw "Method Start need a Array Variable.";

        }

    }


    static Next(){

        // pega item atual
        let item = carouselArr[Carousel._sequence];

        // div imagem
        let carousel =
            document.getElementById("carousel");

        // injeta imagem
        carousel.innerHTML = `
        
            <img 
                src="img/${item.image}" 
                class="carousel-image"
            >
        
        `;

        // div título
        let title =
            document.getElementById("carousel-title");

        // injeta texto + link
        title.innerHTML = `
        
            <a href="${item.url}">
                ${item.title}
            </a>
        
        `;

        // altera CSS via JS
        title.style.textAlign = "center";
        title.style.marginTop = "10px";
        title.style.fontWeight = "bold";

        // incrementa sequência
        Carousel._sequence++;

        // condição retorno início
        if(Carousel._sequence >= Carousel._size){

            Carousel._sequence = 0;

        }

    }

    // botão próximo
    static Prev(){

        Carousel._sequence--;

        if(Carousel._sequence < 0){

            Carousel._sequence =
                Carousel._size - 1;

        }

        Carousel.Next();

    }

};