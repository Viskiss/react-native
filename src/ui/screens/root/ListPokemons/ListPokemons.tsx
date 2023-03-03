import React, { useEffect, useState } from 'react';
import PokeAPI from 'pokeapi-typescript';

import { FlatList, ScrollView, View } from 'react-native';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { pokemonSliceActions } from 'src/redux/slices/pokemonSlice';

import Pagination from './components/Pagination/Pagination';
import Item from './components/Item/Item';

import { styles } from './ListPokemons.styles';

const ListPokemons: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const entiti = useAppSelector((state) => state.pokemonStore.pokemon);

  useEffect(() => {
    (async () => {
      try {
        const limit = 10;
        const offset = page > 1 ? page * 10 - 10 : 0;

        const resourceList = await PokeAPI.Pokemon.list(limit, offset);

        dispatch(pokemonSliceActions.setPokemons(resourceList.results));
        setCount(resourceList.count);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    })();
  }, [dispatch, page]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
        data={entiti}
        renderItem={({ item }) => <Item name={item.name} url={item.url} />}
        keyExtractor={(item) => item.name}
      />
      </View>
      <Pagination page={page} setPage={setPage} total={count} />
    </ScrollView>
  );
};

export default ListPokemons;
