let currentPokemonName;
let currentPokemonImg;
let currentPokemonGroupOne;
let currentPokemonGroupTwo;
let currentNumberOfPokemon = '898';
let currentPokemonColor;
let test;
// let urlGroup;

async function loadPokemon() {

    for (let i = 1; i < 30; i++) {
        let urlName = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
        let responsName = await fetch(urlName);
        currentPokemonName = await responsName.json();

        let urlPicrure = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i}.png`
        currentPokemonImg = urlPicrure;

        test = currentPokemonName["egg_groups"].length;
        let urlGroupOne;
        let urlGroupTwo;
        if (test == 2) {
            urlGroupOne = currentPokemonName['egg_groups'][0]['url'];
            urlGroupTwo = currentPokemonName['egg_groups'][1]['url'];
            let responsGroupOne = await fetch(urlGroupOne);
            currentPokemonGroupOne = await responsGroupOne.json();
            let responsGroupTwo = await fetch(urlGroupTwo);
            currentPokemonGroupTwo = await responsGroupTwo.json();
        } else {
            urlGroupOne = currentPokemonName['egg_groups'][0]['url'];
            let responsGroupOne = await fetch(urlGroupOne);
            currentPokemonGroupOne = await responsGroupOne.json();
        }
        // let urlGroupTwo = currentPokemonName['egg_groups'][1]['url'];

        renderPokemonInfo(i);
    }
}



function renderPokemonInfo(i) {
    let name = currentPokemonName['names'][5]['name'];
    let id = currentPokemonName['id'];
    let img = currentPokemonImg;

    if (test == 2) {
        let groupOne = currentPokemonGroupOne['names'][3]['name'];
        let groupTwo = currentPokemonGroupTwo['names'][3]['name'];

        document.getElementById('pokedex').innerHTML += `        
        <div id="pokemon${i}">
            <h2 class="name-of-pokemon">${name}</h2>
            <p class="id-of-pokemon">${id}</p>
            <img src="${img}" alt="" class="img-of-pokemon">
            <p class="group-of-pokemon">${groupOne}</p>
            <p class="group-of-pokemon">${groupTwo}</p>
        </div>
        `
    } else {
        let groupOne = currentPokemonGroupOne['names'][3]['name'];
        document.getElementById('pokedex').innerHTML += `        
        <div id="pokemon${i}">
            <h2 class="name-of-pokemon">${name}</h2>
            <p class="id-of-pokemon">${id}</p>
            <img src="${img}" alt="" class="img-of-pokemon">
            <p class="group-of-pokemon">${groupOne}</p>
        </div>
        `
    }

    currentPokemonColor = currentPokemonName['color']['name'];

    if (currentPokemonColor == 'purple') {
        document.getElementById(`pokemon${i}`).classList.add('bg-purple');
    }
    if (currentPokemonColor == 'green') {
        document.getElementById(`pokemon${i}`).classList.add('bg-green');
    }
    if (currentPokemonColor == 'black') {
        document.getElementById(`pokemon${i}`).classList.add('bg-black');
    }
    if (currentPokemonColor == 'blue') {
        document.getElementById(`pokemon${i}`).classList.add('bg-blue');
    }
    if (currentPokemonColor == 'brown') {
        document.getElementById(`pokemon${i}`).classList.add('bg-brown');
    }
    if (currentPokemonColor == 'gray') {
        document.getElementById(`pokemon${i}`).classList.add('bg-gray');
    }
    if (currentPokemonColor == 'pink') {
        document.getElementById(`pokemon${i}`).classList.add('bg-pink');
    }
    if (currentPokemonColor == 'red') {
        document.getElementById(`pokemon${i}`).classList.add('bg-red');
    }
    if (currentPokemonColor == 'white') {
        document.getElementById(`pokemon${i}`).classList.add('bg-white');
    }
    if (currentPokemonColor == 'yellow') {
        document.getElementById(`pokemon${i}`).classList.add('bg-yellow');
    }
}