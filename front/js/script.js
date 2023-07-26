//Recuperation des pieces depuis l' API
const api = `http://localhost:3000/api/products`

const callApi = async () =>{
    let response = await fetch (api)

    if (response.ok){
        return response.json()
    }
    else{

        throw "Erreur sur la requête"
    }
}


 //Creation element
const create = (element) =>{
    let creation = document.createElement(element)
    return creation
 }

//Fonction qui génère les pièces sur la page d'accueil
let genererPieces = async () =>{
    const pieces = await callApi('/');

    console.log (pieces);

    for (let i = 0; i < pieces.length ; i++){
        const sectionProduits = document.getElementById('items');
        const article = pieces[i]

        //Balise a
        const lien = create ("a");
        lien.href = 'product.html?id=' + article._id

        //Balise article
        const pieceElement = create ("article");

        //Balise image
        const imageElement = create ("img");
        imageElement.src = article.imageUrl
        imageElement.alt = "Photographie du canapé" + `${article.name}`

        //Titre
        const nomElement = create ("h3");
        nomElement.innerText = `${article.name}`;

        //Description
        const descriptionElement = create ("p");
        descriptionElement.innerText = `${article.description}`;

        
        sectionProduits.appendChild(lien);
        lien.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(descriptionElement);
    }

}

genererPieces();