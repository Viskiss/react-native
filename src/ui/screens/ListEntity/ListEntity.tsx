import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import PokeAPI from 'pokeapi-typescript';
import Pagination from './components/Pagination';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { entitiSliceActions } from '../../../redux/slices/entitySlice';
import Item from './components/Item';

const ListEntity: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const entiti = useAppSelector((state) => state.entityStore.entiti);

  useEffect(() => {
    (async () => {
      try {
        const limit = 10;
        const offset = page > 1 ? page * 10 - 10 : 0;

        const resourceList = await PokeAPI.Pokemon.list(limit, offset);

        dispatch(entitiSliceActions.upload(resourceList.results));
        setCount(resourceList.count);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    })();
  }, [dispatch, page]);

  return (
    <View>
      <Text>ListEntity</Text>
      <FlatList
        data={entiti}
        renderItem={({ item }) => <Item name={item.name} url={item.url} />}
        keyExtractor={(item) => item.name}
      />
      <Pagination
              page={page}
              setPage={setPage}
              total={count}
            />
    </View>
  );
};

export default ListEntity;
