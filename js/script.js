let currentPokemonName;
let currentPokemonStats;
let currentPokemonImg;
let currentPokemonGroupOne;
let currentPokemonGroupTwo;
let currentPokemonColor;
let lengthOfPokemonGroup;
let urlGroupOne;
let allPokemons = [];
let allStats = [];

const firstPokemonOfGenerationOne = '1';
const firstPokemonOfGenerationTwo = '152';
const firstPokemonOfGenerationThree = '252';
const firstPokemonOfGenerationFour = '387';
const firstPokemonOfGenerationFive = '494';
const firstPokemonOfGenerationSix = '650';
const firstPokemonOfGenerationSeven = '722';
const firstPokemonOfGenerationEight = '810';
 
const lengthPokemonFirstGeneration = '151';
const lengthPokemonSecondGeneration = '251';
const lengthPokemonThirdGeneration = '386';
const lengthPokemonFourthGeneration = '493';
const lengthPokemonFifthGeneration = '649';
const lengthPokemonSixthGeneration = '721';
const lengthPokemonSeventhGeneration = '809';
const lengthPokemonEighthGeneration = '898';

const currentNumberOfPokemon = '898';

// async function loadPokemon() {

//     for (let i = 1; i < 25; i++) {
//         await setPokemonName(i);
//         await loadPictureOfPokemon(i);
//         await setPokemonGroups(i);
//         setPokemonArray();
//         renderPokemonOverview(i);
//     }
// }

async function renderPokemonArray() {

    for (let i = 1; i <= currentNumberOfPokemon; i++) {
        await loadPokemon(i);
        allPokemons.push(currentPokemonName);
        allStats.push(currentPokemonStats);
        if (allPokemons.length < currentNumberOfPokemon) {
            document.getElementById('loading_content').innerHTML = `
            <img src="img/pokeapi.png" alt="">
            <h2>Daten werden geladen...</h2>
            <h2>Es wurden ${i} von ${currentNumberOfPokemon} geladen</h2>
            `
            document.getElementById('load').classList.remove('dp-none');
        } else {
            document.getElementById('load').classList.add('dp-none');
        }
    }
}


// function renderPokemonOverview(i) {
//     let name = currentPokemonName['names'][5]['name'];
//     let id = currentPokemonName['id'];
//     let img = currentPokemonImg;
//     if (lengthOfPokemonGroup == 2) {
//         setPokemonOverviewWithTwoGroups(i, name, id, img);
//     } else {
//         setPokemonOverviewWithOneGroups(i, name, id, img);
//     }
//     setBackgroundColorOfPokemon(i);
// }


function generationOne() {
    document.getElementById('main_menu').classList.add('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationOne, lengthPokemonFirstGeneration);
}

function generationTwo() {
    document.getElementById('main_menu').classList.add('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationTwo, lengthPokemonSecondGeneration);
}

function generationThree() {
    document.getElementById('main_menu').classList.add('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationThree, lengthPokemonThirdGeneration);
}

function generationFour() {
    document.getElementById('main_menu').classList.add('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationFour, lengthPokemonFourthGeneration);
}

function generationFive() {
    document.getElementById('main_menu').classList.add('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationFive, lengthPokemonFifthGeneration);
}

function generationSix() {
    document.getElementById('main_menu').classList.add('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationSix, lengthPokemonSixthGeneration);
}

function generationSeven() {
    document.getElementById('main_menu').classList.add('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationSeven, lengthPokemonSeventhGeneration);
}

function generationEight() {
    document.getElementById('main_menu').classList.add('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationEight, lengthPokemonEighthGeneration);
}

async function renderPokemonOverview(firstPokemon, lastPokemon) {
    for (let i = firstPokemon - 1; i <= lastPokemon - 1; i++) {
        await loadPictureOfPokemon(i + 1);
        await setPokemonGroups(i);
        let name = allPokemons[i]['names'][5]['name'];
        let id = allPokemons[i]['id'];
        let img = currentPokemonImg;
        if (lengthOfPokemonGroup == 2) {
            setPokemonOverviewWithTwoGroups(i, name, id, img);
        } else if (lengthOfPokemonGroup == 1) {
            setPokemonOverviewWithOneGroups(i, name, id, img);
        } else {
            setPokemonOverviewWithNoneGroups(i, name, id, img);
        }
        setBackgroundColorOfPokemon(i);
        if (i < lastPokemon - 1) {
            document.getElementById('loading_content').innerHTML = `
            <img src="img/pokeapi.png" alt="">
            <h2>Daten werden geladen...</h2>
            <h2>Es wurden ${i - firstPokemon + 1} von ${lastPokemon - firstPokemon} geladen</h2>
            `
            document.getElementById('load').classList.remove('dp-none');
        } else {
            document.getElementById('load').classList.add('dp-none');
            document.getElementById('pokedex').classList.remove('dp-none');
            document.getElementById('pokedex').classList.add('margin-top-pokedex');
        }
    }

}

function backToMenu() {
    document.getElementById('pokedex').innerHTML = '';
    document.getElementById('main_menu').classList.remove('dp-none');
    document.getElementById('pokedex').classList.add('dp-none');
    document.getElementById('pokedex').classList.remove('margin-top-pokedex');
    document.getElementById('search_div').classList.add('dp-none');
    document.getElementById('search_div').classList.remove('margin-search');
    document.getElementById('pokemon_detail').classList.add('dp-none');
    document.getElementById('search_name').value = '';
    document.getElementById('search_id').value = '';
}

function goToSearch() {
    document.getElementById('main_menu').classList.add('dp-none');
    document.getElementById('search_div').classList.remove('dp-none');
    document.getElementById('search_div').classList.add('margin-search');
    document.getElementById('pokedex').classList.remove('dp-none');
    document.getElementById('pokedex').innerHTML = '';
    document.getElementById('pokedex').classList.add('margin-top-pokedex');
}

async function searchForPokemonName() {
    let searchPokemonName = document.getElementById('search_name').value;
    document.getElementById('pokedex').innerHTML = '';
    for (let i = 0; i <= currentNumberOfPokemon - 1; i++) {
        if (allPokemons[i]['names'][5]['name'].toLowerCase().startsWith(searchPokemonName.toLowerCase())) {
            await loadPictureOfPokemon(i + 1);
            await setPokemonGroups(i);
            renderPokemonOverviewSearch(i);
        }
    }
}

async function searchForPokemonId() {
    let searchPokemonId = document.getElementById('search_id').value;
    document.getElementById('pokedex').innerHTML = '';
    for (let i = 0; i <= currentNumberOfPokemon - 1; i++) {
        if (allPokemons[i]['id'] == (searchPokemonId)) {
            await loadPictureOfPokemon(i + 1);
            await setPokemonGroups(i);
            renderPokemonOverviewSearch(i);
        }
    }
}

async function renderPokemonOverviewSearch(i) {
        let name = allPokemons[i]['names'][5]['name'];
        let id = allPokemons[i]['id'];
        let img = currentPokemonImg;
        if (lengthOfPokemonGroup == 2) {
            setPokemonOverviewWithTwoGroups(i, name, id, img);
        } else if (lengthOfPokemonGroup == 1) {
            setPokemonOverviewWithOneGroups(i, name, id, img);
        } else {
            setPokemonOverviewWithNoneGroups(i, name, id, img);
        }
        setBackgroundColorOfPokemon(i);
}

async function openPokemonOverview(i) {
    document.getElementById('pokemon_detail').innerHTML = '';
    await loadPictureOfPokemon(i + 1);
    await setPokemonGroups(i);
    let name = allPokemons[i]['names'][5]['name'];
    let id = allPokemons[i]['id'];
    let img = currentPokemonImg;
    let hp = allStats[i]['stats'][0]['base_stat'];
    let attack = allStats[i]['stats'][1]['base_stat'];
    let defense = allStats[i]['stats'][2]['base_stat'];
    let specialAttack = allStats[i]['stats'][3]['base_stat'];
    let specialDefense = allStats[i]['stats'][4]['base_stat'];
    let speed = allStats[i]['stats'][5]['base_stat'];
    if (lengthOfPokemonGroup == 2) {
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
    } else if (lengthOfPokemonGroup == 1) {
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
    } else {
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
    setBackgroundColorOfPokemonDetail(i);
    document.getElementById('pokedex').classList.add('dp-none');
    document.getElementById('pokemon_detail').classList.remove('dp-none');
}

async function setBackgroundColorOfPokemonDetail(i) {
    currentPokemonColor = allPokemons[i]['color']['name'];

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
    if (currentPokemonColor == 'brown') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-brown');
    }
    if (currentPokemonColor == 'gray') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-gray');
    }
    if (currentPokemonColor == 'pink') {
        document.getElementById(`pokemon_detail-${i}`).classList.add('bg-pink');
    }
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

function closePokemonDetail() {
    document.getElementById('pokemon_detail').innerHTML = '';
    document.getElementById('pokedex').classList.remove('dp-none');
    document.getElementById('pokemon_detail').classList.add('dp-none');
}