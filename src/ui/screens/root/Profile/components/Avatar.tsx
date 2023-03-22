import React from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

import { Image, TouchableOpacity, View } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { useCurrentUser } from 'src/hooks/useCurrentUser-DEV';

import Camera from 'src/ui/assets/Camera.svg';
import LightTheme from 'src/ui/assets/lightTheme.svg';
import DarkTheme from 'src/ui/assets/darkTheme.svg';
import { styles } from '../Profile.styles';

const Avatar: React.FC = () => {
  const { colors } = useTheme();

  const { currentUser, addUserAvatar, changeTheme, theme } = useCurrentUser();

  return (
    <View style={[styles.imageBox, { borderColor: colors.primary }]}>
      <TouchableOpacity style={styles.theme} onPress={changeTheme}>
        {theme === 'light' ? <LightTheme /> : <DarkTheme />}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.avatarButton, { backgroundColor: colors.primary }]}
        onPress={() => launchImageLibrary({ mediaType: 'photo' }, (e) => addUserAvatar(e))
        }
>
        <Camera />
      </TouchableOpacity>
      {currentUser !== null && (
        <Image style={styles.avatar} source={{ uri: currentUser.avatar }} />
      )}
    </View>
  );
};

export default Avatar;
