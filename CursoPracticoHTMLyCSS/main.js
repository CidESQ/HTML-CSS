const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('#shopping-cart-container');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#product-detail')
const productDetailClose = document.querySelector('.product-detail-close');


// ------------------------------------- FUNCIONES------------------
menuEmail.addEventListener('click', toggleDesktopMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);
menuHam.addEventListener('click', toggleMenuHam);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {

    const isShoppingCartOpen = !shoppingCartMenu.classList.contains('onScreen');

    if (isShoppingCartOpen ) {
        shoppingCartMenu.classList.add('onScreen');
    }

    desktopMenu.classList.toggle('onScreen');
}

function toggleMenuHam() {

    const isShoppingCartOpen = !shoppingCartMenu.classList.contains('onScreen');

    if (isShoppingCartOpen) {
        shoppingCartMenu.classList.add('onScreen');
    }

    mobileMenu.classList.toggle('onScreen');
}

function toggleShoppingCart() {

    const isMobileMenuOpen = !mobileMenu.classList.contains('onScreen');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('onScreen');

    if (isMobileMenuOpen || isDesktopMenuOpen ) {
        mobileMenu.classList.add('onScreen');
        desktopMenu.classList.add('onScreen');
    }

    shoppingCartMenu.classList.toggle('onScreen');
}

function openProductDetail(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('onScreen');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('onScreen');
    const isShoppingCartOpen = !shoppingCartMenu.classList.contains('onScreen');

    if (isMobileMenuOpen || isDesktopMenuOpen || isShoppingCartOpen) {
        mobileMenu.classList.add('onScreen');
        desktopMenu.classList.add('onScreen');
        shoppingCartMenu.classList.add('onScreen');
    }
    productDetailContainer.classList.remove('onScreen');
}

function closeProductDetail(){
    productDetailContainer.classList.add('onScreen');
}

/*
* ESTE CODIGO EN TEORIA DEBERIA DE VENIR DE UNA BASE DE DATOS
* Productos:
*/
const productList = [];
productList.push({
    name: 'Ring',
    price: '120',
    image: 'https://images.pexels.com/photos/10475789/pexels-photo-10475789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
    name: 'Bike',
    price: '100',
    image: 'https://images.pexels.com/photos/4198566/pexels-photo-4198566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computador',
    price: '130',
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1200',
});
productList.push({
    name: 'Ring',
    price: '120',
    image: 'https://images.pexels.com/photos/10475789/pexels-photo-10475789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
    name: 'Bike',
    price: '100',
    image: 'https://images.pexels.com/photos/4198566/pexels-photo-4198566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Computador',
    price: '130',
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1200',
});
/* ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ */

function renderProducts(arr){
/* ˆˆˆˆ HTML QUE VAMOS A HACER DINAMICO ˆˆˆˆˆˆˆ */
// <div className="product-card">
//     <img src="https://images.pexels.com/photos/10475789/pexels-photo-10475789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//          alt="">
//     <div className="product-info">
//         <div>
//             <p>$12,000.00</p>
//             <p>Diamond ring</p>
//         </div>
//         <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="" class="imagen-carrito">
//         </figure>
//     </div>
// </div>
    for (producto of arr) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product = {name, price, image} -> product.image
        const productImage = document.createElement('img');
        productImage.setAttribute('src', producto.image);
        productImage.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + producto.price;

        const productName = document.createElement('p');
        productName.innerText = producto.name;

        const productInfoFigure = document.createElement('figure');

        const imgProductCard = document.createElement('img');
        imgProductCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        /*
        * metiendo los compententes en los otros para hacer que se parezca a la estructura del html
        * se tiene que realizar de atras para adelante y de adentro hacia afuera
        */

        productInfoFigure.appendChild(imgProductCard);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        // Agregando al html el product card
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);