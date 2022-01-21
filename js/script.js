async function renderPokemonArray() {

    for (let i = 1; i <= currentNumberOfPokemon; i++) {
        await loadPokemon(i);
        pushJsonToArray();

        if (allPokemons.length < currentNumberOfPokemon) {
            showInitalLoadScreen(i);
        } else {
            removeLoadScreen()
        }
    }
}

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
            showGenerationLoadScreen(i, firstPokemon, lastPokemon);
        } else {
            closeGenerationLoadScreen();
            openGenerationOverview();
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
        showPokemonGroupTwoForDetailOverview(i, name, id, img, hp, attack, defense, specialAttack, specialDefense, speed);
    } else if (lengthOfPokemonGroup == 1) {
        showPokemonGroupOneForDetailOverview(i, name, id, img, hp, attack, defense, specialAttack, specialDefense, speed);
    } else {
        showPokemonNoneGroupForDetailOverview(i, name, id, img, hp, attack, defense, specialAttack, specialDefense, speed);
    }
    setBackgroundColorOfPokemonDetail(i);
    document.getElementById('pokedex').classList.add('dp-none');
    document.getElementById('pokemon_detail').classList.remove('dp-none');
}

function closePokemonDetail() {
    document.getElementById('pokemon_detail').innerHTML = '';
    document.getElementById('pokedex').classList.remove('dp-none');
    document.getElementById('pokemon_detail').classList.add('dp-none');
}