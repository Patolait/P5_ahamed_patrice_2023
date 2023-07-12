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

const selector = (element) => {
   document.querySelector("element");
}

const getId = (id) => {
   document.getElementById("id");
}


//Recuperation de l'image
const getImage = (img, src, alt) => {
   document.createElement(img)
   img.src       = src
   img.alt       = alt
   return img 
}



async function recuperationProduit(){
   //Recherche de l'url
   const searchUrl = window.location.search

   //Recuperation id
   const urlSearchParams = new URLSearchParams(searchUrl)
   const id = urlSearchParams.get("id")
   let product = await callApi(`/${id}`)

   //Titre
   selector('.title').innerText = `${product.name}`


   //Image
   selector ('.item__img').getImage (img, product.imageUrl, "Photographie du canapé" + `${product.name}`)

   //Prix
   getId('price').innerText = `${product.price} €`

   //Description
   getId('description').innerText = `${product.description}`

   //liste couleurs
   const listeCouleurs = getId('colors');
   const colors = product.colors
   for (let value of colors) {
      let option = document.createElement(option)
      option.value = value
      option.innerText = value
      listeCouleurs.appenChild(option)
   }
}

//Ajout au panier

getId('addToCart').addEventListener('click', function(){
   



})