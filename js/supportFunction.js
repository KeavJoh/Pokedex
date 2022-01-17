async function setPokemonName(i) {
    let urlName = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
    let responsName = await fetch(urlName);
    currentPokemonName = await responsName.json();
}

async function loadPictureOfPokemon(i) {
    let urlPicrure = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i}.png`
    currentPokemonImg = urlPicrure;
}

async function setPokemonGroups(i) {
    lengthOfPokemonGroup = currentPokemonName["egg_groups"].length;
    let urlGroupOne;
    let urlGroupTwo;
    if (lengthOfPokemonGroup == 2) {
        await pokemonHaveTwoGroups();
    } else {
        await pokemonHaveOneGroups();
    }
}

async function pokemonHaveTwoGroups() {
    urlGroupOne = currentPokemonName['egg_groups'][0]['url'];
    urlGroupTwo = currentPokemonName['egg_groups'][1]['url'];
    let responsGroupOne = await fetch(urlGroupOne);
    currentPokemonGroupOne = await responsGroupOne.json();
    let responsGroupTwo = await fetch(urlGroupTwo);
    currentPokemonGroupTwo = await responsGroupTwo.json();
}

async function pokemonHaveOneGroups() {
    urlGroupOne = currentPokemonName['egg_groups'][0]['url'];
    let responsGroupOne = await fetch(urlGroupOne);
    currentPokemonGroupOne = await responsGroupOne.json();
}

function setPokemonOverviewWithTwoGroups(i, name, id, img) {
    let groupOne = currentPokemonGroupOne['names'][3]['name'];
    let groupTwo = currentPokemonGroupTwo['names'][3]['name'];

    document.getElementById('pokedex').innerHTML += `        
    <div id="pokemon${i}" class="pokemon-overview" onclick="openPokemonOverview(${i})">
        <div class="pokemon-overview-head">
        <h2 class="name-of-pokemon">${name}</h2>
        <p class="id-of-pokemon">#${id}</p>
        </div>
        <img src="${img}" alt="" class="img-pokemon-overview">
        <div class="two-pokemongroups">
        <p class="group-of-pokemon">${groupOne}</p>
        <p class="group-of-pokemon">${groupTwo}</p>
        </div>
    </div>
    `
}

function setPokemonOverviewWithOneGroups(i, name, id, img) {
    let groupOne = currentPokemonGroupOne['names'][3]['name'];
    document.getElementById('pokedex').innerHTML += `        
    <div id="pokemon${i}" class="pokemon-overview" onclick="openPokemonOverview(${i})">
        <div class="pokemon-overview-head">
        <h2 class="name-of-pokemon">${name}</h2>
        <p class="id-of-pokemon">#${id}</p>
        </div>
         <img src="${img}" alt="" class="img-pokemon-overview">
        <p class="group-of-pokemon">${groupOne}</p>
    </div>
    `
}

function setBackgroundColorOfPokemon(i) {
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