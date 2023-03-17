import {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Lecture5() {
  const [buttonHasBeenTapped, setButtonHasBeenTapped] = useState(false);
  const [text, setText] = useState('');

  return (
    <View>
      <Text testID="welcome">Hello, Lecture 5!</Text>
      <Pressable
        style={styles.button}
        onPress={() => setButtonHasBeenTapped(true)}
        testID="mybutton">
        <Text>Tap Me</Text>
      </Pressable>
      {buttonHasBeenTapped && <Text>You tapped the button!</Text>}
      <TextInput
        testID="mytextinput"
        placeholder="enter text"
        value={text}
        onChangeText={setText}
        style={styles.textInput}
      />
      <Text>Entered text: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
});
