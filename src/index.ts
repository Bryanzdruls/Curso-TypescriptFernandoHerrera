import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon('Charmander');

charmander.savePokemonToDb(4);

console.log(charmander );
