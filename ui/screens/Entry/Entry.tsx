import React, { useState } from 'react';

import { Button, View } from 'react-native';

const Entry: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <View>
      <Button
        onPress={() => setIsRegistered(!isRegistered)}
        title="I'm registered"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default Entry;
