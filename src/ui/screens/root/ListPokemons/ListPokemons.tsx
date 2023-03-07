import React, { useEffect, useState } from 'react';
import PokeAPI from 'pokeapi-typescript';

import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native';

import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { pokemonSliceActions } from 'src/redux/slices/pokemonSlice';

import type { PokemonStackParamList } from 'src/navigation/components/PokemonListStack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Item from './components/Item/Item';

import { styles } from './ListPokemons.styles';

type Props = NativeStackScreenProps<PokemonStackParamList, 'ListPokemons'>;

const ListPokemons: React.FC<Props> = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [loadingData, setLoadingData] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const entiti = useAppSelector((state) => state.pokemonStore.pokemons);

  useEffect(() => {
    (async () => {
      try {
        setLoadingData(true);
        const limit = 20;
        const offset = page > 1 ? page * 20 - 10 : 0;

        const resourceList = await PokeAPI.Pokemon.list(limit, offset);

        dispatch(pokemonSliceActions.setPokemons(resourceList.results));

        setLoadingData(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch, page]);

  const fetchMorePokemon = () => {
    setPage(page + 1);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setPage(1);
    setRefreshing(false);
  };

  return (
    <View>
      {!entiti.length && loadingData ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <FlatList
            style={styles.container}
            data={entiti}
            renderItem={({ item }) => (
              <Item
                name={item.name}
                url={item.url} navigation={navigation} route={route}
/>
            )}
            keyExtractor={(item) => item.name}
            onEndReachedThreshold={0.1}
            onEndReached={fetchMorePokemon}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </View>
      )}
    </View>
  );
};

export default ListPokemons;
