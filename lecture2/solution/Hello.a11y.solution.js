import {Image, StyleSheet, Text, View} from 'react-native';
import WavingHand from './assets/waving-hand.svg';

// This image and SVG are read by VoiceOver
export default function Hello() {
  return (
    <View>
      <Text>Hello, World!</Text>
      {/* Photo by Walter Brunner on Unsplash */}
      <Image
        source={require('./assets/squirrel.jpg')}
        style={styles.squirrel}
        accessible
        accessibilityRole="image"
        accessibilityLabel="squirrel waving"
      />
      <WavingHand
        fill="gray"
        width={100}
        height={100}
        accessible
        accessibilityRole="image"
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
