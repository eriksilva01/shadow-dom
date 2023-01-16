
/*

class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        
        
        //base do component = <h1> Erik Silva </h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = "Erik Silva";

        //estilizar o component
        const style = document.createElement("style");
        style.textContent= `h1{ 
            color:gray;
            
        }
        `;
        //enviar shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
        
    }

}

customElements.define('titulo-dinamico', TituloDinamico);*/