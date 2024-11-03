import React from 'react';
import { PokemonGrid } from '@/pokemons';

export const metadata = {
  title: '151 favorites',
  description: '151 favorites',
};

export default async function PokemonPage() {
  //const pokemons = await getPokemons(151);

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        favorites Pokemons <small>local-state</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
