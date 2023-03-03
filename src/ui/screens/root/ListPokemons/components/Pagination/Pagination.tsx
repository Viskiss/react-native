import type { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';

import Button from 'src/ui/components/Button/Button';

export type PropsType = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  total: number;
};

const Pagination: React.FC<PropsType> = ({ page, setPage, total }) => {
  const previousPageClickHandler = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const nextPageClickHandler = () => {
    if (total / page === 10) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <View>
      <Button onPress={previousPageClickHandler}>{'<'}</Button>
      <Text>{page}</Text>
      <Button onPress={nextPageClickHandler}>{'>'}</Button>
    </View>
  );
};

export default Pagination;
