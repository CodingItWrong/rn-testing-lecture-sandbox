import {Image, StyleSheet, Text, View} from 'react-native';
import WavingHand from './assets/waving-hand.svg';

export default function Hello({name = 'World'}) {
  return (
    <View>
      <Text>Hello, {name}!</Text>
      {/* Photo by Walter Brunner on Unsplash */}
      <Image
        source={require('./assets/squirrel.jpg')}
        style={styles.squirrel}
        accessibilityLabel="squirrel waving"
      />
      <WavingHand
        fill="gray"
        width={100}
        height={100}
        accessibilityLabel="waving hand"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  squirrel: {
    width: '100%',
    height: 250,
  },
});
