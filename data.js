const poke_container = document.getElementById('pokedex');
const colors ={
  fire: '#FF7F50',
  grass: '#DEFDE0',
  water: '#00FFFF',
  bug: '#f8d5a3',
  normal: '#FFF8DC'
};
const main_types = Object.keys(colors);

const fetchPokemon = () =>{
  for (let i = 1; i<= 20; i++){
    const getPokemon = async() => {
      const url =`https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)  
    const pokemon = {
      name:data.name,
      id:data.id,
      image:data.sprites['front_default'],
      type:data.types.map((type)=> type.type.name)
      .join(' , '),
      weight:data.weight
    };

    console.log(pokemon)
    createPokemonCard(pokemon)
  } 

const createPokemonCard = ((pokemon)=>{
   

pok_Elements = document.createElement('div')
pok_Elements.classList.add('pokemon')
const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
const type = main_types.find(types => pokemon.type.indexOf(types)> -1);
const color = colors[type];
pok_Elements.style.backgroundColor = color;
pokeinnerhtml =
`
<div class = "pictures" >
<img class = "images" src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
<img/>
</div>
<div class="container">
ID: ${pokemon.id}
<br>
NAME: ${name}
<br>
TYPE: ${pokemon.type}
<br>
WEIGHT: ${pokemon.weight}
</div>
`
pok_Elements.innerHTML = pokeinnerhtml;
poke_container.appendChild(pok_Elements)
})
getPokemon();
}
}
fetchPokemon();


// const button = document.getElementById('search')

// button.addEventListener('click', handlePokemonSearch)

// function handlePokemonSearch() {
//   const search = document.getElementById('input')
//   debugger
// }