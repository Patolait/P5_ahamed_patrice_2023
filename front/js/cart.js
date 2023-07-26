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



//import {create} from './script.js';
const create = (element) =>{
    let creation = document.createElement(element)
    return creation
 }
//import { getId } from ".front/js/product";
const getId = (id) => {
    return document.getElementById(id);
 }

 const divCreate = (element) =>{
    let divCreation = create("div");
    divCreation.classList.add(element);
    return divCreation

 }





let recuperationPanier = async () => {

    //Recuperation des données du localStorage
    let cart = window.localStorage.getItem ('Store');
    elementCart = JSON.parse(cart)
    console.log(elementCart)

    
    
    let artcileCart = async() =>{

        for (let element of elementCart) {

            let product = await callApi(`/${element.id}`)
        
            let section = getId('cart__items')
    
            //Creation balise article
            let article = create("article")
            article.classList.add("cart__item")
            article.dataset.id = element.id
            article.dataset.color = element.color
    
            //Creation balise image
            let divImage = divCreate("cart__item__img")
            let imageArticleCart = create("img")
            imageArticleCart.src = product.imageUrl
            imageArticleCart.alt = product.name

            //Creation balise contenu et prix
            let divContent = divCreate("cart__item__content")
            let divDescription = divCreate("cart__item__content__description")
            //Titre
            let title = create("h2")
            title.innerText = product.name
            //Couleur
            let color = create("p")
            color.innerText = element.color
            //Prix
            let priceUnit = create("p")
            priceUnit.innerText = `${product.price} €`

            //Creation contenu modifiable
            let divContentSetting = divCreate("cart__item__content__settings")

            //Quantité
            let divQuantitySetting = divCreate("cart__item__content__settings__quantity")
            let titleQuantity = create("p")
            titleQuantity.innerText = "Qté :"
            //Champs de saisie
            let inputCreation = create("input")
            inputCreation.type = 'Number'
            inputCreation.classList.add("itemQuantity")
            inputCreation.name = 'itemQuantity'
            inputCreation.min = "1"
            inputCreation.max = "100"
            inputCreation.value = element.quantity

            //Bouton supprimer
            let divDelete = divCreate("cart__item__content__settings__delete")
            let textDelete = create("p")
            textDelete.classList.add("deleteItem")
            textDelete.innerText = "Supprimer"
                      


    
            section.appendChild(article);
            article.appendChild(divImage);
            divImage.appendChild(imageArticleCart);
            article.appendChild(divContent);
            divContent.appendChild(divDescription);
            divDescription.appendChild(title);
            divDescription.appendChild(color);
            divDescription.appendChild(priceUnit);
            divContent.appendChild(divContentSetting);
            divContentSetting.appendChild(divQuantitySetting);
            divQuantitySetting.appendChild(titleQuantity);
            divQuantitySetting.appendChild(inputCreation);
            divContent.appendChild(divDelete);
            divDelete.appendChild(textDelete);

    

        }

    }
    artcileCart()
    
}

recuperationPanier()