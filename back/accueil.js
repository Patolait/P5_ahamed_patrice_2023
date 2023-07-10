//Recuperation des pieces depuis l' API
const pieces = async () => {
    let reponse = await fetch ("http://localhost:3000/api/products")

    if (reponse.ok){
        return reponse.json()
    }
    else {
        throw "Erreur sur la requete"
    }
}

 //Creation element
 const create = (element) =>{
    let creation = document.createElement(element)
    return creation
 }

//Fonction qui génère les pièces sur la page d'accueil
function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++){
        const sectionProduits = document.querySelector(".items");

        //Balise a
        const lien = create ("a href");

        //Balise article
        const pieceElement = create ("article");

        //Balise image
        const imageElement = create ("img");
        imageElement.src = pieces[i].imageUrl

        //Titre
        const nomElement = create ("h3");
        nomElement.innerText = pieces.name;

        //Description
        const descriptionElement = create ("p");
        descriptionElement.innerText = pieces.description;

        
        sectionProduits.appendChild(lien);
        sectionProduits.appendChild(pieceElement);
        sectionProduits.appendChild(imageElement);
        sectionProduits.appendChild(nomElement);
        sectionProduits.appendChild(descriptionElement);
    }
}

genererPieces(pieces);