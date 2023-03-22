import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenHelper = {
  getAccess: async () => {
    const token = await AsyncStorage.getItem('accessToken');
    return token;
  },
  getRefresh: async () => {
    const token = await AsyncStorage.getItem('refreshToken');
    return token;
  },
  setAccess: async (token: string) => {
    await AsyncStorage.setItem('accessToken', token);
  },
  setRefresh: async (token: string) => {
    await AsyncStorage.setItem('refreshToken', token);
  },
  removeAccess: async () => {
    await AsyncStorage.removeItem('accessToken');
  },
  removeRefresh: async () => {
    await AsyncStorage.removeItem('refreshToken');
  },
};

export default {
  token: tokenHelper,
};
