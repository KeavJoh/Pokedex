let currentPokemonName;
let currentPokemonImg;
let currentPokemonGroupOne;
let currentPokemonGroupTwo;
let currentNumberOfPokemon = '898';
let currentPokemonColor;
let lengthOfPokemonGroup;
// let urlGroup;

async function loadPokemon() {

    for (let i = 1; i < 30; i++) {
        await setPokemonName(i);
        await loadPictureOfPokemon(i);
        await setPokemonGroups(i);
        renderPokemonOverview(i);
    }
}



function renderPokemonOverview(i) {
    let name = currentPokemonName['names'][5]['name'];
    let id = currentPokemonName['id'];
    let img = currentPokemonImg;
    if (lengthOfPokemonGroup == 2) {
        setPokemonOverviewWithTwoGroups(i, name, id, img);
    } else {
        setPokemonOverviewWithOneGroups(i, name, id, img);
    }
    setBackgroundColorOfPokemon(i);
}