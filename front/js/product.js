//Recuperation des pieces depuis l' API
const api = `http://localhost:3000/api/products`

const callApi = async (id) =>{
    let response = await fetch (api + id)

    if (response.ok){
        return response.json()
    }
    else{

        throw "Erreur sur la requête"
    }
}

const selector = (element) => {
   return document.querySelector(element);
   
}

const getId = (id) => {
   return document.getElementById(id);
}



//Recuperation de l'image
const getImage = (parent,src, alt) => {
   let img = document.createElement('img')
   img.src       = src
   img.alt       = alt
   parent.appendChild(img)
   return img 
}

const getTextElementBySelector = (selection, content) =>{
   let element = selector (selection)
   element.innerText = content
}



let recuperationProduit = async () => {
   //Recherche de l'url
   const searchUrl = window.location.search

   //Recuperation id
   const urlSearchParams = new URLSearchParams(searchUrl)
   const id = urlSearchParams.get("id")
   console.log(id)
   let product = await callApi(`/${id}`)
   
   console.log(product)


   //Balise title
   document.getElementsByTagName('title')
   document.title = product.name
   console.log(document.title)
  
   //Titre produit
   let title = getId('title')
   title.innerText = product.name


   //Image
   let parent = selector('.item__img')
   getImage(parent, product.imageUrl, "Photographie du canapé " + product.name)

   //Prix
   getId('price').innerText = product.price

   //Description
   getId('description').innerText = product.description

   //liste couleurs
   const listeCouleurs = getId('colors');
   const colors = product.colors
   for (let color of colors){
      let option = document.createElement('option')
      option.value = color
      option.innerText = color
      listeCouleurs.appendChild(option)
   }


   //Evennement au clic
   getId('addToCart').addEventListener('click', function(){
      

      //Recuperation des element du localStorage
      let recapArticle = 'Store'
      let panier = window.localStorage.getItem(recapArticle) === null
      ? []
      : JSON.parse(localStorage.getItem(recapArticle))
      console.log(panier)

      //Creation objet pour sauvegarde
      let article = {
         id : id,
         color : getId('colors').value,
         quantity : getId('quantity').value
      }
      console.log(article)

      //Boucle d'ajout au panier
      let idColorExist = false

      for (let model of panier){
         if (model.id === article.id && model.color === article.color){
            model.quantity = Number(model.quantity) + Number(article.quantity)
            idColorExist = true

            //break
        }
      }

      if(!idColorExist){
         panier.push(article)
      }

      console.log(panier)

      //Message de confirmation
      if(article.quantity > 1){
         alert("Vous avez ajouté " + `${article.quantity}` + " pièces de la reference " + `${product.name} (${article.color})` + " à votre panier")
      } else {
         alert("Vous avez ajouté " + `${article.quantity}` + " pièce de la reference " + `${product.name} (${article.color})` + " à votre panier")
      }
      

      localStorage.setItem (recapArticle, JSON.stringify(panier))
      localStorage.getItem ('recapArticle')
      console.log(panier)
      
   })
      
}

const cart = JSON.parse(localStorage.getItem('Store'));

recuperationProduit();
