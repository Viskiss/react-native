import React, { useEffect, useState } from 'react';
import PokeAPI from 'pokeapi-typescript';

import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { usePokemon } from 'src/hooks/usePokemon';

import Item from './components/Item/Item';

import { styles } from './ListPokemons.styles';

export type PokemonStackParamList = {
  ListPokemons: undefined;
  SelectPokemon: undefined | {url: string};
};

type Props = NativeStackScreenProps<PokemonStackParamList, 'ListPokemons'>;

const ListPokemons: React.FC<Props> = ({ navigation, route }) => {
  const { setPokemons, reloadPokemonList, pokemons } = usePokemon();

  const [page, setPage] = useState(1);
  const [loadingData, setLoadingData] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoadingData(true);
        const resourceList = await PokeAPI.Pokemon.list(
          20,
          page > 1 ? page * 20 - 10 : 0,
        );
        setPokemons(resourceList.results);
        setLoadingData(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page, refreshing]);

  const fetchMorePokemon = () => {
    setPage(page + 1);
  };

  const onRefresh = () => {
    setRefreshing(true);
    reloadPokemonList(1);
    setPage(1);
    (async () => {
      try {
        setLoadingData(true);
        const resourceList = await PokeAPI.Pokemon.list(20, 0);
        setPokemons(resourceList.results);
        setLoadingData(false);
      } catch (error) {
        console.log(error);
      }
    })();
    setRefreshing(false);
  };

  return (
    <View>
      {!pokemons.length && loadingData ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <FlatList
            ListFooterComponent={<ActivityIndicator size="large" />}
            style={styles.container}
            data={pokemons}
            renderItem={({ item }) => (
              <Item
                name={item.name}
                url={item.url}
                navigation={navigation}
                route={route}
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
