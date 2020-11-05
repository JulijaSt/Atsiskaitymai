const cardBin = document.getElementById('results');
const search = document.getElementById('search');


search.addEventListener('keyup', filter);

for (let i = 0; i < data.length; i++) {
    createCard(data[i]);
}

function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardImage = document.createElement('img');
    cardImage.classList.add('card__image');
    cardImage.setAttribute('src', data.url);
    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');
    const dogName = document.createElement('h2');
    dogName.classList.add('dog');
    const takeDogName = document.createTextNode(data.breeds[0].name);
    dogName.appendChild(takeDogName);
    const description = document.createElement('p');
    const breakElement = document.createElement('br');
    const breedFor = document.createTextNode('Breed for: ' + data.breeds[0].bred_for);
    const lifeSpan = document.createTextNode('Life span: ' + data.breeds[0].life_span);
    description.appendChild(breedFor);
    description.appendChild(breakElement);
    description.appendChild(lifeSpan);
    cardContent.appendChild(dogName);
    cardContent.appendChild(description);
    card.appendChild(cardImage);
    card.appendChild(cardContent);
    cardBin.appendChild(card);
}

function filter() {
    for (let i = 0; i < cardBin.children.length; i++) {
        cardBin.children[i].classList.add('hide');
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i].breeds[0].name.toLowerCase().includes(search.value.toLowerCase())) {
            cardBin.children[i].classList.remove('hide');
        }
    }
}
