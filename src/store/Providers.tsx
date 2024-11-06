'use client';

import { Provider } from 'react-redux';
import { store } from './';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

export const StoreProviders = ({ children }: Props) => {
  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem('favorite-pokemons') || '{}'
    );
    store.dispatch({
      type: 'pokemons/setFavoritePokemons',
      payload: favorites,
    });
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
