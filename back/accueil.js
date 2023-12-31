//Recuperation des pieces depuis l' API
const reponse = await fetch ("http://localhost:3000/api/products");



 //Creation element
 const create = (element) =>{
    let creation = document.createElement(element)
    return creation
 }

//Fonction qui génère les pièces sur la page d'accueil
let genererPieces = async () =>{
    const pieces = await reponse.json();
    console.log (pieces);

    for (let i = 0; i < pieces.length ; i++){
        const sectionProduits = document.getElementById('items');
        const article = pieces[i]

        //Balise a
        const lien = create ("a");
        lien.href = reponse + article._id

        //Balise article
        const pieceElement = create ("article");

        //Balise image
        const imageElement = create ("img");
        imageElement.src = article.imageUrl

        //Titre
        const nomElement = create ("h3");
        nomElement.innerText = article.name;

        //Description
        const descriptionElement = create ("p");
        descriptionElement.innerText = article.description;

        
        sectionProduits.appendChild(lien);
        sectionProduits.appendChild(pieceElement);
        sectionProduits.appendChild(imageElement);
        sectionProduits.appendChild(nomElement);
        sectionProduits.appendChild(descriptionElement);
    }
}

genererPieces(pieces);