const newProductCard = (product) => {
    const li = document.createElement('li');
    li.classList.add('product-card');
    li.dataset.id = product.article;
    

    const image = document.createElement('img');
    image.classList.add('product-card-image')
    image.src = product.imageSrc;
    image.alt = product.imageAlt;
    
    const title = document.createElement('strong');
    title.classList.add('product-card__title')
    title.textContent = product.name;
    
    const desc = document.createElement('span');
    desc.classList.add('product-card__description')
    desc.textContent = product.description;
    // desc.style.display = 'block'; 
    
    const price = document.createElement('span');
    desc.classList.add('product-card__price')
    price.textContent = `${product.price} руб.`;
    price.style.display = 'block'; 

    const orderBtn = document.createElement('button');
    orderBtn.className = "button product-card__button product-card__button--product-card";
    orderBtn.textContent = "Заказать"

    li.appendChild(image);
    li.appendChild(title);
    li.appendChild(desc);
    li.appendChild(price);
    li.appendChild(orderBtn);

    return li;
}


export const viewProducts = (productsList) => {
    const listContainer = document.getElementById('product-list');
    try {
      // Создаем "фрагмент" в памяти, чтобы не перерисовывать браузер на каждой итерации
        const fragment = document.createDocumentFragment();
      
        productsList.forEach((product) => fragment.appendChild(newProductCard(product)));
      
      // Вставляем весь фрагмент в DOM за один раз
        listContainer.appendChild(fragment);
    } catch (error) {
        console.error('Ошибка при парсинге JSON или рендеринге:', error);
    }
}

export const findThreeHits = (productsList) =>{
    const listContainer = document.getElementById('hit-list');
    const fragment = document.createDocumentFragment();
    console.log(productsList);
    const hitProducts = productsList.filter(product => product.category === "Хит").slice(0, 3);

    hitProducts.forEach((product) => {
        const cardElement = newProductCard(product); 
        fragment.appendChild(cardElement);
    });

    listContainer.appendChild(fragment);
};