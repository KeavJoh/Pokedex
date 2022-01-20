let currentPokemonName;
let currentPokemonImg;
let currentPokemonGroupOne;
let currentPokemonGroupTwo;
let currentPokemonColor;
let lengthOfPokemonGroup;
let urlGroupOne;
let allPokemons = [];

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
        await allPokemons.push(currentPokemonName);
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
    document.getElementById('pokedex').classList.remove('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationOne, lengthPokemonFirstGeneration);
}

function generationTwo() {
    document.getElementById('main_menu').classList.add('dp-none');
    document.getElementById('pokedex').classList.remove('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationTwo, lengthPokemonSecondGeneration);
}

function generationThree() {
    document.getElementById('main_menu').classList.add('dp-none');
    document.getElementById('pokedex').classList.remove('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationThree, lengthPokemonThirdGeneration);
}

function generationFour() {
    document.getElementById('main_menu').classList.add('dp-none');
    document.getElementById('pokedex').classList.remove('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationFour, lengthPokemonFourthGeneration);
}

function generationFive() {
    document.getElementById('main_menu').classList.add('dp-none');
    document.getElementById('pokedex').classList.remove('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationFive, lengthPokemonFifthGeneration);
}

function generationSix() {
    document.getElementById('main_menu').classList.add('dp-none');
    document.getElementById('pokedex').classList.remove('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationSix, lengthPokemonSixthGeneration);
}

function generationSeven() {
    document.getElementById('main_menu').classList.add('dp-none');
    document.getElementById('pokedex').classList.remove('dp-none');
    renderPokemonOverview(firstPokemonOfGenerationSeven, lengthPokemonSeventhGeneration);
}

function generationEight() {
    document.getElementById('main_menu').classList.add('dp-none');
    document.getElementById('pokedex').classList.remove('dp-none');
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
    }

}