let mealsContent = document.querySelector(".meals-content");

let iconMealas = document.getElementById("icon-mealas");

let mealsLink = document.getElementById("meals-link");

let downIconMealsClass = "fa-solid fa-chevron-down";

let upIconMealsClass = "fa-solid fa-chevron-up";

let linksLiOne = document.getElementById("links-Li-One");

function onclickIcon(icon,content,link,linkLi) {
    icon.addEventListener("click", function(){
        if(content.classList.contains("show")){
            content.classList.remove("show")
        }else{
            content.classList.add("show")
        }
        if(this.classList.contains("down")){
            this.className = upIconMealsClass;
     
            this.style.color = "rgb(234, 157, 79)"
         }else{
             this.className = downIconMealsClass;
     
             this.style.color = "#42446c";
         }
         if(link.classList.contains("meals")){
            link.classList.remove("meals")
        }else{
            link.classList.add("meals")
        }
        if(linkLi.classList.contains("show")){
            linkLi.classList.remove("show")
        }else{
            linkLi.classList.add("show")
        }
    })
};

onclickIcon(iconMealas,mealsContent,mealsLink,linksLiOne);

let iconShop = document.getElementById("icon-shop");

let shopContent = document.querySelector(".shop-content");

let shopLink = document.getElementById("shop-link");

let linkLiTwo = document.getElementById("link-li-Two");

onclickIcon(iconShop,shopContent,shopLink,linkLiTwo);

let iconBars = document.getElementById("icon-bars");

let allLinks = document.querySelector(".links");

let classBars = "fa-solid fa-bars";

let classMark = "fa-solid fa-xmark";

let sliderContent = document.getElementById("slider");

iconBars.onclick = function(){
   
    if(allLinks.classList.contains("show")){
        allLinks.classList.remove("show");

        this.className = classBars;
    }else{
        allLinks.classList.add("show");

        this.className = classMark;
    }

    if(sliderContent.classList.contains("show")){

        sliderContent.classList.remove("show")
    }else{

        sliderContent.classList.add("show")
    }
}

let cartIcon = document.getElementById("cart-icon");

let myCartIcon = document.getElementById("my-cart");

let myCartContent = document.querySelector(".my-cart");

myCartIcon.addEventListener("click", function(){
    if(myCartContent.classList.contains("show")){

        myCartContent.classList.remove("show");
    }else{

        myCartContent.classList.add("show");
    }
});

cartIcon.onclick = function(){
    myCartContent.classList.remove("show")
}

let activeImage = document.getElementById("active-image");

let myImages = ["images/featured-in-logos-newyorker-white.webp", "images/featured-in-logos-forbes-white.webp", "images/featured-in-logos-white-techcrunch.webp", "images/featured-logo-fatherly-white.webp", "images/featured-in-logos-inc-white.webp", "images/featured-in-logos-romper-white.webp"];

function changeImage(image, myImages) {

    setInterval(function(){

        let myImagesRandomNumber = Math.floor(Math.random() * myImages.length);

        image.src = myImages[myImagesRandomNumber];
    },2000)
}
let mediaquery = window.matchMedia("(max-width: 992px)");
mediaquery.addEventListener("change", (eve) => {
    if(eve.matches){
        changeImage(activeImage, myImages)
    }else{
        return false;
    }
});


let allItems = document.querySelector(".my-cart .container .all-items");


function createElementsCart(imgSrc, h3Content, priceContent, allItems){

    let myDiv = document.createElement("div");
    myDiv.className = "product-one";
    myDiv.id = "my-Div";

    let myImg = document.createElement("img");
    myImg.src = imgSrc;
    myImg.alt = "";
    myDiv.appendChild(myImg);

    let myTextDiv = document.createElement("div");
    myTextDiv.className = "text";
    myTextDiv.id = "text";

    let myH3 = document.createElement("h3");
    myH3.textContent = h3Content;

    myTextDiv.appendChild(myH3);
    myDiv.appendChild(myTextDiv);

    let myPriceDiv = document.createElement("div");
    myPriceDiv.className = "price";

    let myPrice = document.createElement("p");
    myPrice.textContent = priceContent;

    myPriceDiv.appendChild(myPrice);

    myDiv.appendChild(myPriceDiv);

    allItems.appendChild(myDiv);
}

let allItemsCart = document.querySelector(".my-cart .container .all-items");

let addCartOne = document.getElementById("add-cart-one");

let addCartTwo = document.getElementById("add-cart-Two");

let addCartThree = document.getElementById("add-cart-Three");

let addCartFour = document.getElementById("add-cart-Four");

let spancartNumber = document.getElementById("span-cart-Number");

let continueShopping = document.querySelector(".my-cart .container .continue-Shopping");

countNumberItems(spancartNumber, continueShopping)

function countNumberItems(span, shop){
    if(span.textContent == 0 || span.textContent <= 3){
        shop.classList.add("active");
    }else{
        shop.classList.remove("active");
    }
}

let imgone = document.getElementById("img-one").src;

addCartOne.onclick = function(){

    createElementsCart(imgone,"Banana Butternut Bowl","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");

    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);

    if(allItemsCartNum > 0){
        let removeItemsButton = document.getElementById("remove-items");
        
        removeItemsButton.addEventListener("click", function(){

            let allitemsId = document.getElementById("all-items");

            allitemsId.removeChild(allitemsId.lastElementChild);

            --spancartNumber.textContent;
        })
    }else{
        return false;
    }
}
let imgtwo = document.getElementById("img-two").src;

addCartTwo.onclick = function(){
    createElementsCart( imgtwo,"Apple Pie Oatmeal","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);
}

let imgThree = document.getElementById("img-three").src;

addCartThree.onclick = function(){
    createElementsCart(imgThree,"Blueberry Banana Oatmeal","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);
}

let imgFour = document.getElementById("img-Four").src;

addCartFour.onclick = function(){
    createElementsCart(imgFour,"Potato Hash","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);

}
let imgFive = document.getElementById("img-Five").src;

let addCartFive = document.getElementById("add-cart-Five");
addCartFive.onclick = function(){
    createElementsCart(imgFive,"Banana Butternut Bowl","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);

    if(allItemsCartNum > 0){
        let removeItemsButton = document.getElementById("remove-items");
        
        removeItemsButton.addEventListener("click", function(){

            let allitemsId = document.getElementById("all-items");

            allitemsId.removeChild(allitemsId.lastElementChild);

            --spancartNumber.textContent;
        })
    }else{
        return false;
    }
}

let imgSix = document.getElementById("img-Six").src;


let addCartSix = document.getElementById("add-cart-Six");
addCartSix.onclick = function(){
    createElementsCart(imgSix,"Baby Burrito Bowl","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);
}

let imgSeven = document.getElementById("img-Seven").src;

let addCartSeven = document.getElementById("add-cart-Seven");
addCartSeven.onclick = function(){
    createElementsCart(imgSeven,"Zucchini Pesto Pasta","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);
}
let imgEight = document.getElementById("img-Eight").src;

let addCartEight = document.getElementById("add-cart-Eight");
addCartEight.onclick = function(){
    createElementsCart(imgEight,"Coconut Curry","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);
}
let imgNine = document.getElementById("img-Nine").src;

let addCartNine = document.getElementById("add-cart-Nine");
addCartNine.onclick = function(){
    createElementsCart(imgNine,"Potato Hash","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);

}
let imgTen = document.getElementById("img-Ten").src;

let addCartTen = document.getElementById("add-cart-Ten");
addCartTen.onclick = function(){
    createElementsCart(imgTen,"Chickpea Yam Bowl","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);
}

let imgTwelve = document.getElementById("img-Twelve").src;

let addCartTwelve = document.getElementById("add-cart-Twelve");
addCartTwelve.onclick = function(){
    createElementsCart(imgTwelve,"Broccoli Veggie Medley","$5.99", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);
}
let imgmealone = document.getElementById("img-meal-one").src;

let addcartoneMeals = document.getElementById("add-cart-oneMeals");
addcartoneMeals.onclick = function(){
    createElementsCart(imgmealone,"Apple & Beet Puree","$4.19", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);

    if(allItemsCartNum > 0){
        let removeItemsButton = document.getElementById("remove-items");
        
        removeItemsButton.addEventListener("click", function(){

            let allitemsId = document.getElementById("all-items");

            allitemsId.removeChild(allitemsId.lastElementChild);

            --spancartNumber.textContent;
        })
    }else{
        return false;
    }
}

let imgmealtwo = document.getElementById("img-meal-two").src;

let addcartTwoMeals = document.getElementById("add-cart-TwoMeals");
addcartTwoMeals.onclick = function(){
    createElementsCart(imgmealtwo,"Blueberry & Banana Puree","$4.19", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);
}

let imgmealthree = document.getElementById("img-meal-three").src;

let addcartThreeMeals = document.getElementById("add-cart-ThreeMeals");
addcartThreeMeals.onclick = function(){
    createElementsCart(imgmealthree,"Pea & Zucchini Puree","$4.19", allItems);

    let allItemsCartNum = document.querySelector(".my-cart .container .all-items").children.length;

    let spancartNumber = document.getElementById("span-cart-Number");
    spancartNumber.textContent = allItemsCartNum;

    countNumberItems(spancartNumber, continueShopping);
}

//let BackedExpertsDepartemant = document.getElementById("Backed-experts-Departemant");

let BackedExpertsDepartement = document.querySelector(".Backed-experts");
console.log(BackedExpertsDepartement);

let expertsContentLength = document.querySelector(".Backed-experts .container .experts-content").children.length;

console.log(expertsContentLength);

function declareBulletsElement(colNums, depart){

    let myElementBullets = document.createElement("ul");
    myElementBullets.className = "buttons";
    myElementBullets.id = "element-Bullets"

    for(let i = 0; i< colNums; i++){

    let myElementBulletsItem = document.createElement("li");

    myElementBulletsItem.setAttribute("data-index", i)

    myElementBullets.appendChild(myElementBulletsItem);
    }

    depart.appendChild(myElementBullets);
}
 declareBulletsElement(expertsContentLength,BackedExpertsDepartement);

let expertsContentCols = [...document.querySelectorAll(".experts-content .col")];

let liButtons = [...document.querySelectorAll(".buttons li")];

liButtons[0].classList.add("active");

liButtons.forEach((li) => {
    li.addEventListener("click", function() {

       removaActiveClassFromBullets(liButtons);
       removaActiveClassFromBullets(expertsContentCols);

       this.classList.add("active");

       expertsContentCols[this.getAttribute("data-index")].classList.add("active")
    })
})

function removaActiveClassFromBullets(arr){
    arr.forEach(function(li) {
        li.classList.remove("active")
    })
}

let greatContentLength = [...document.querySelectorAll(".great-content .col")].length;

let greatCompanyBullets = document.querySelector(".great-company .container .bullets-content");

declareBulletsElement(greatContentLength, greatCompanyBullets)

console.log(greatCompanyBullets);


let greatContentCols = [...document.querySelectorAll(".great-content .col")];

let liButtonsGreat = [...document.querySelectorAll(".bullets-content .buttons li")];

liButtonsGreat[0].classList.add("active");

liButtonsGreat.forEach((li) => {
    li.addEventListener("click", function() {

       removaActiveClassFromBullets(liButtonsGreat);
       removaActiveClassFromBullets(greatContentCols);

       this.classList.add("active");

       greatContentCols[this.getAttribute("data-index")].classList.add("active")
    })
});

let FirstNameInput = document.getElementById("First-Name-Input");

let LastNameInput = document.getElementById("Last-Name-Input");

let EmailAddressInput = document.getElementById("Email-Address-Input");

let PhoneNumberInput = document.getElementById("Phone-Number-Input");

let textareaInput = document.getElementById("textarea-Input");

function onFocusAndonBlurInput(input){
    input.onfocus = function(){
        this.setAttribute("data-Place", this.getAttribute("placeholder"));
    
        this.setAttribute("placeholder", "");
    }
    input.onblur = function(){
        this.setAttribute("placeholder", this.getAttribute("data-Place"));
    
        this.setAttribute("data-Place", "");
    }
}
onFocusAndonBlurInput(FirstNameInput);
onFocusAndonBlurInput(LastNameInput);
onFocusAndonBlurInput(EmailAddressInput);
onFocusAndonBlurInput(PhoneNumberInput);
onFocusAndonBlurInput(textareaInput);

let emailFooter =  document.getElementById("email-Footer");
onFocusAndonBlurInput(emailFooter);

let myForm = document.getElementById("register");

myForm.onsubmit = function(){
    let FirstNameInputValue = document.getElementById("First-Name-Input").value;
    let nameRe = /^[a-zA-Z]+$/;
    let validationName = nameRe.test(FirstNameInputValue);

    sessionStorage.setItem("First-Name", FirstNameInputValue);

    let LastNameInput = document.getElementById("Last-Name-Input").value;
    let validationLastName = nameRe.test(LastNameInput);

    sessionStorage.setItem("Last-Name", LastNameInput);

    let EmailAddressInput = document.getElementById("Email-Address-Input").value;
    let EmailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let validationEmail = EmailRe.test(EmailAddressInput);

    sessionStorage.setItem("Email-Address", EmailAddressInput);

    let PhoneNumberInput = document.getElementById("Phone-Number-Input").value;
    let phoneRe = /^01[0-2,5]{1}[0-9]{8}$/;
    let validationPhone = phoneRe.test(PhoneNumberInput);

    sessionStorage.setItem("Phone-Number", PhoneNumberInput);

    let textareaInput = document.getElementById("textarea-Input").value;
    let textRe = /^[a-zA-Z0-9\s.,?!'"\n\r-]+$/;
    let validationText = textRe.test(textareaInput);

    sessionStorage.setItem("Textarea-Content", textareaInput);

    if(validationName === false){
       return false;
    }
    if(validationLastName === false){
        return false;
    }
    if(validationEmail === false){
        return false;
    }
    if(validationPhone === false){
        return false;
    }
    if(validationText === false){
        return false;
    }
    return true;
}

let formFooter = document.getElementById("form-Footer");

formFooter.onsubmit = function(){
    let emailFooterValue = document.getElementById("email-Footer").value;

    let emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let validationResult = emailRe.test(emailFooterValue);

    sessionStorage.setItem("Email-Address-Footer", emailFooterValue);

    if(validationResult === false){
        return false;
    }
    return true;
}

let linksLiShop = document.querySelector(".links .links-Li-One a");

let linkliMeals = document.querySelector(".links .link-li-Two a");

let contactLink = document.getElementById("contact-Link");


let allLinksDepartment = [linksLiShop, linkliMeals, contactLink];

allLinksDepartment.forEach((link) => {
    link.addEventListener("click", function(e){

        e.preventDefault();

        let targetId = this.getAttribute("href").slice(1);

        let targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView( {behavior: "smooth"});
    })
})

































