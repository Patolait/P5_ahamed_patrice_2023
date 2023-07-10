//Recuperation des pieces depuis l' API
const pieces = await fetch("http://localhost:3000/api/products").then(pieces =>pieces.json());

const selector = (element) => {
   document.querySelector("element");
}


//Recuperation de l'image
const getImage = (img, src, alt) => {
   document.createElement(img)
   img.src       = src
   img.alt       = alt
   return img 
}

async function reuperationProduit(){
   //Recherche de l'url
   const searchUrl = window.location.search

   //Recuperation id
   const urlSearchParams = new URLSearchParams(searchUrl)
   const id = urlSearchParams.get("id")
   let product = await pieces + `/${id}`

   //Image
   selector ('item__img')
   getImage (img, product.imageUrl, `${product.name}`)

}