import { PokemonsResponse, SimplePokemon } from '@/pokemons';
import React from 'react';
import { PokemonGrid } from '@/pokemons';

export const metadata = {
  title: '151 pokemons',
  description: '151 pokemons',
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const pokemonResponse: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = pokemonResponse.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  //throw new Error('Error fetching pokemons');

  return pokemons;
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        List of pokemons <small>static</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
