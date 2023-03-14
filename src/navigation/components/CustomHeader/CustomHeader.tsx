import { useTheme } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { useCurrentUser } from 'src/hooks/useCurrentUser';
import { styles } from './CustomHeader.styles';

type Props = {
  title: string;
};

const CustomHeader: React.FC<Props> = ({ title }) => {
  const { colors } = useTheme();

  const { currentUser } = useCurrentUser();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      <View style={[styles.imageBox, { borderColor: colors.primary }]}>
              {currentUser && (
                <Image
                  style={styles.avatar}
                  source={{ uri: currentUser.avatar }}
                />
              )}
      </View>
    </View>
  );
};

export default CustomHeader;
