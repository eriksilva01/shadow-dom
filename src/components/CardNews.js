class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    build() {

            const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class", "card"); // ADICIONEI UM ATRIBUTO DE CLASS, NOME

            
            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class","card-left");

                const autor = document.createElement("span");
                autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

                const linkTitle = document.createElement("a");
                linkTitle.textContent = this.getAttribute ("title");
                linkTitle.href= this.getAttribute("link-url");

                const newsContent = document.createElement("p");
                newsContent.textContent = this.getAttribute("contet");

            cardLeft.appendChild(autor);
            cardLeft.appendChild(linkTitle);
            cardLeft.appendChild(newsContent);

            const cardRigth = document.createElement("div");
            cardRigth.setAttribute("class","card-rigth");
            
                const newsImage = document.createElement("img");
                newsImage.src = this.getAttribute("photo") || "./assets/default.jpg"
                newsImage.alt="foto da noticia";
                cardRigth.appendChild(newsImage);

            componentRoot.appendChild(cardLeft);
            componentRoot.appendChild(cardRigth);


            return componentRoot;
        

        

        }
        styles(){
            const style = document.createElement("style");
                style.textContent = `
                .card {
                    width: 80%;
                    box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                    -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                    -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    margin-top: 15px;
                    border-radius:10px;
                  }
                  
                  .card-left {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 10px;
                  }
                  
                  .card-left > span {
                    font-weight: 600;
                  }
                  
                  .card-left > a {
                    margin-top: 15px;
                    font-size: 25px;
                    color: black;
                    text-decoration: none;
                    font-weight: bold;
                  }
                  
                  .card-left > p {
                    color: rgb(70, 70, 70);
                  }

                  .card-rigth {
                    padding-top: 10px;
                  
                  }
                `;



            return style;
        }
    }

customElements.define("card-news", CardNews);