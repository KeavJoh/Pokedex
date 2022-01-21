async function loadPokemon(i) {
    let urlPokemon = `https://pokeapi.co/api/v2/pokemon-species/${i}/`;
    let responsPokemon = await fetch(urlPokemon);
    currentPokemonName = await responsPokemon.json();
    
    let urlStats = `https://pokeapi.co/api/v2/pokemon/${i}/`;
    let responseStats = await fetch(urlStats);
    currentPokemonStats = await responseStats.json();
}

function pushJsonToArray() {
    allPokemons.push(currentPokemonName);
    allStats.push(currentPokemonStats);
}

function showInitalLoadScreen(i) {
    document.getElementById('loading_content').innerHTML = `
    <img src="img/pokeapi.png" alt="">
    <h2>Daten werden geladen...</h2>
    <h2>Es wurden ${i} von ${currentNumberOfPokemon} geladen</h2>
    `
    document.getElementById('load').classList.remove('dp-none');
}

function removeLoadScreen() {
    document.getElementById('load').classList.add('dp-none');
}

async function loadPictureOfPokemon(i) {
    let urlPicrure = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i}.png`
    currentPokemonImg = urlPicrure;
}

async function setPokemonGroups(i) {
    lengthOfPokemonGroup = allPokemons[i]["egg_groups"].length;
    let urlGroupOne;
    let urlGroupTwo;
    if (lengthOfPokemonGroup == 2) {
        await ifPokemonHaveTwoGroups(i);
    } 
    if (lengthOfPokemonGroup == 1) {
        await ifPokemonHaveOneGroups(i);
    }
    if (lengthOfPokemonGroup == undefined) {
        ifPokemonHaveNoneGroups(i);
    }
}

async function ifPokemonHaveTwoGroups(i) {
    urlGroupOne = allPokemons[i]['egg_groups'][0]['url'];
    urlGroupTwo = allPokemons[i]['egg_groups'][1]['url'];
    let responsGroupOne = await fetch(urlGroupOne);
    currentPokemonGroupOne = await responsGroupOne.json();
    let responsGroupTwo = await fetch(urlGroupTwo);
    currentPokemonGroupTwo = await responsGroupTwo.json();
}

async function ifPokemonHaveOneGroups(i) {
    urlGroupOne = allPokemons[i]['egg_groups'][0]['url'];
    let responsGroupOne = await fetch(urlGroupOne);
    currentPokemonGroupOne = await responsGroupOne.json();
}

function ifPokemonHaveNoneGroups(i) {
    currentPokemonGroupOne = '';
    currentPokemonGroupTwo = '';
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
        <p class="group-of-pokemon group-one-${i}">${groupOne}</p>
        <p class="group-of-pokemon group-two-${i}">${groupTwo}</p>
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
        <p class="group-of-pokemon group-one-${i}">${groupOne}</p>
    </div>
    `
}

function setPokemonOverviewWithNoneGroups(i, name, id, img) {
    document.getElementById('pokedex').innerHTML += `        
    <div id="pokemon${i}" class="pokemon-overview" onclick="openPokemonOverview(${i})">
        <div class="pokemon-overview-head">
        <h2 class="name-of-pokemon">${name}</h2>
        <p class="id-of-pokemon">#${id}</p>
        </div>
         <img src="${img}" alt="" class="img-pokemon-overview">
         <p class="group-of-pokemon group-one-${i}">Unbekannt</p>
    </div>
    `
}

function showGenerationLoadScreen(i, firstPokemon, lastPokemon) {
    document.getElementById('loading_content').innerHTML = `
    <img src="img/pokeapi.png" alt="">
    <h2>Daten werden geladen...</h2>
    <h2>Es wurden ${i - firstPokemon + 1} von ${lastPokemon - firstPokemon} geladen</h2>
    `
    document.getElementById('load').classList.remove('dp-none');
}

function closeGenerationLoadScreen() {
    document.getElementById('load').classList.add('dp-none');
}

function openGenerationOverview() {
    document.getElementById('pokedex').classList.remove('dp-none');
    document.getElementById('pokedex').classList.add('margin-top-pokedex');
}

async function setBackgroundColorOfPokemon(i) {
    currentPokemonColor = allPokemons[i]['color']['name'];

    checkPurpleGreenBlackBlue(i);
    checkBrownGrayPink(i);
    checkRedWhiteYellow(i);
}

function checkPurpleGreenBlackBlue(i) {
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
}

function checkBrownGrayPink(i) {
    if (currentPokemonColor == 'brown') {
        document.getElementById(`pokemon${i}`).classList.add('bg-brown');
    }
    if (currentPokemonColor == 'gray') {
        document.getElementById(`pokemon${i}`).classList.add('bg-gray');
    }
    if (currentPokemonColor == 'pink') {
        document.getElementById(`pokemon${i}`).classList.add('bg-pink');
    }
}

function checkRedWhiteYellow(i) {
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

async function setBackgroundColorOfPokemonDetail(i) {
    currentPokemonColor = allPokemons[i]['color']['name'];

    checkPurpleGreenBlackBlueForDetail(i);
    checkBrownGrayPinkForDetail(i);
    checkRedWhiteYellowForDetail(i);
}

function checkPurpleGreenBlackBlueForDetail(i) {
    if (currentPokemonColor == 'purple') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-purple');
    }
    if (currentPokemonColor == 'green') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-green');
    }
    if (currentPokemonColor == 'black') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-black');
    }
    if (currentPokemonColor == 'blue') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-blue');
    }
}

function checkBrownGrayPinkForDetail(i) {
    if (currentPokemonColor == 'brown') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-brown');
    }
    if (currentPokemonColor == 'gray') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-gray');
    }
    if (currentPokemonColor == 'pink') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-pink');
    }
}

function checkRedWhiteYellowForDetail(i) {
    if (currentPokemonColor == 'red') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-red');
    }
    if (currentPokemonColor == 'white') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-white');
    }
    if (currentPokemonColor == 'yellow') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-yellow');
    }
}

function showPokemonGroupTwoForDetailOverview(i, name, id, img, hp, attack, defense, specialAttack, specialDefense, speed) {
    let groupOne = currentPokemonGroupOne['names'][3]['name'];
    let groupTwo = currentPokemonGroupTwo['names'][3]['name'];
    document.getElementById('pokemon_detail').innerHTML = `
    <div id="pokemon_detail-${i}" class="pokemon-overview">
        <div class="pokemon-overview-head">
            <h2 class="name-of-pokemon">${name}</h2>
            <p class="id-of-pokemon">#${id}</p>
        </div>
        <img src="${img}" alt="" class="img-pokemon-overview">
        <div class="two-pokemongroups">
            <p class="group-of-pokemon group-one-${i}">${groupOne}</p>
            <p class="group-of-pokemon group-two-${i}">${groupTwo}</p>
        </div>
    </div>
    <div class="pokemon-stats">
        <p>HP: ${hp}</p>
        <p>Angriff: ${attack}</p>
        <p>Verteidigung: ${defense}</p>
        <p>Spezial-Angriff: ${specialAttack}</p>
        <p>Spezial-Verteidigung: ${specialDefense}</p>
        <p>Geschwindigkeit: ${speed}</p>
    </div>
    <div>
        <button onclick="closePokemonDetail()" class="search-button">Schließen</button>
    </div>
    `
}

function showPokemonGroupOneForDetailOverview(i, name, id, img, hp, attack, defense, specialAttack, specialDefense, speed) {
    let groupOne = currentPokemonGroupOne['names'][3]['name'];
    document.getElementById('pokemon_detail').innerHTML = `
    <div id="pokemon_detail-${i}" class="pokemon-overview">
        <div class="pokemon-overview-head">
            <h2 class="name-of-pokemon">${name}</h2>
            <p class="id-of-pokemon">#${id}</p>
        </div>
        <img src="${img}" alt="" class="img-pokemon-overview">
        <div class="two-pokemongroups">
            <p class="group-of-pokemon group-one-${i}">${groupOne}</p>
        </div>
    </div>
    <div class="pokemon-stats">
        <p>HP: ${hp}</p>
        <p>Angriff: ${attack}</p>
        <p>Verteidigung: ${defense}</p>
        <p>Spezial-Angriff: ${specialAttack}</p>
        <p>Spezial-Verteidigung: ${specialDefense}</p>
        <p>Geschwindigkeit: ${speed}</p>
    </div>
    <div>
        <button onclick="closePokemonDetail()" class="search-button">Schließen</button>
    </div>
    `
}

function showPokemonNoneGroupForDetailOverview(i, name, id, img, hp, attack, defense, specialAttack, specialDefense, speed) {
    document.getElementById('pokemon_detail').innerHTML = `
    <div id="pokemon_detail-${i}" class="pokemon-overview">
        <div class="pokemon-overview-head">
            <h2 class="name-of-pokemon">${name}</h2>
            <p class="id-of-pokemon">#${id}</p>
        </div>
        <img src="${img}" alt="" class="img-pokemon-overview">
        <div class="two-pokemongroups">
        <p class="group-of-pokemon group-one-${i}">Unbekannt</p>
        </div>
    </div>
    <div class="pokemon-stats">
        <p>HP: ${hp}</p>
        <p>Angriff: ${attack}</p>
        <p>Verteidigung: ${defense}</p>
        <p>Spezial-Angriff: ${specialAttack}</p>
        <p>Spezial-Verteidigung: ${specialDefense}</p>
        <p>Geschwindigkeit: ${speed}</p>
    </div>
    <div>
        <button onclick="closePokemonDetail()" class="search-button">Schließen</button>
    </div>
    `
}
