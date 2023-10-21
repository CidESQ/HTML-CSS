const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

// ------------------------------------- FUNCIONES------------------
menuEmail.addEventListener('click', toggleDesktopMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);
menuHam.addEventListener('click', toggleMenuHam);

function toggleDesktopMenu() {

    const isShoppingCartOpen = !shoppingCartMenu.classList.contains('onScreen');

    if(isShoppingCartOpen){
        shoppingCartMenu.classList.add('onScreen');
    }

    desktopMenu.classList.toggle('onScreen');
}

function toggleMenuHam(){

    const isShoppingCartOpen = !shoppingCartMenu.classList.contains('onScreen');

    if(isShoppingCartOpen){
        shoppingCartMenu.classList.add('onScreen');
    }

    mobileMenu.classList.toggle('onScreen');
}

function toggleShoppingCart(){

    const isMobileMenuOpen = !mobileMenu.classList.contains('onScreen');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('onScreen');

    if (isMobileMenuOpen || isDesktopMenuOpen){
        mobileMenu.classList.add('onScreen');
        desktopMenu.classList.add('onScreen');
    }

    shoppingCartMenu.classList.toggle('onScreen');
}

const productList = [];

productList.push({
    name: 'Ring',
    price: '$120',
    image: 'https://images.pexels.com/photos/10475789/pexels-photo-10475789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});

productList.push({
    name: 'Bike',
    price: '$100',
    image: 'https://images.pexels.com/photos/4198566/pexels-photo-4198566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

productList.push({
    name: 'Computador',
    price: '$130',
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1200',
});

// <div className="product-card">
//     <img src="https://images.pexels.com/photos/10475789/pexels-photo-10475789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//          alt="">
//         <div className="product-info">
//             <div>
//                 <p>$12,000.00</p>
//                 <p>Diamond ring</p>
//             </div>
//             <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="">
//             </figure>
//         </div>
// </div>

for (producto of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-info');

    const img = document.createElement('img');
    image.setAttribute('src', producto.image);
    // product = {name, price, image} -> product.image

    const productInfo = document.createElement('div');
    image.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = producto.price;
    const productName = document.createElement('p');
    productName.innerText = producto.name;




}
