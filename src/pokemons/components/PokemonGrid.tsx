import React from 'react';
import { SimplePokemon } from '../interfaces/simple-pokemons';
import { PokemonCard } from './PokemonCard';

interface PokemonGridsProps {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: PokemonGridsProps) => {
  return (
    <div className='flex flex-wrap gap-10 items-center justify-center'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
