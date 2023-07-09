//Recuperation des pieces depuis l' API
const pieces = await fetch("http://localhost:3000/api/products").then(pieces =>pieces.json());

//Fonction qui génère les pièces sur la page d'accueil
function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++){
        const sectionProduits = document.querySelector(".items");

        //Balise a
        const lien = document.createElement("a href");

        //Balise article
        const pieceElement = document.createElement("article");

        //Balise image
        const imageElement = document.createElement("img");
        imageElement.src = pieces[i].imageUrl

        //Titre
        const nomElement = document.createElement("h3");
        nomElement.innerText = pieces.name;

        //Description
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = pieces.description;
        sectionProduits.appendChild(lien);
        sectionProduits.appendChild(pieceElement);
        sectionProduits.appendChild(imageElement);
        sectionProduits.appendChild(nomElement);
        sectionProduits.appendChild(descriptionElement);
    }
}

genererPieces(pieces);