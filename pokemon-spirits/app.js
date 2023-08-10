const container = document.querySelector('#container');

const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++ ) {
    const divNew = document.createElement('div');
    const label = document.createElement('label');
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    newImg.alt = `Pokemon No. ${i}`;
    label.innerText = `#${i}`;
    divNew.classList.add('pokemon');
    divNew.appendChild(newImg);
    divNew.appendChild(label);
    container.appendChild(divNew);
}


const containers = document.querySelector('#containers');

for (let i = 152; i <= 1010; i++ ) {
    const divNew = document.createElement('div');
    const label = document.createElement('label');
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`;
    newImg.alt = `Pokemon No. ${i}`;
    label.innerText = `#${i}`;
    divNew.classList.add('pokemon');
    divNew.appendChild(newImg);
    divNew.appendChild(label);
    container.appendChild(divNew);
}