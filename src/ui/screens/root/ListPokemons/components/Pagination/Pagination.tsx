import type { Dispatch, SetStateAction } from 'react';
import { Text, View } from 'react-native';

import Button from 'src/ui/components/Button/Button';
import { styles } from './Pagination.styles';

export type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  total: number;
};

const Pagination: React.FC<Props> = ({ page, setPage, total }) => {
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
    <View style={styles.container}>
      <Button containerStyle={styles.button} onPress={previousPageClickHandler}>{'<'}</Button>
      <Text style={styles.text}>{page}</Text>
      <Button containerStyle={styles.button} onPress={nextPageClickHandler}>{'>'}</Button>
    </View>
  );
};

export default Pagination;
