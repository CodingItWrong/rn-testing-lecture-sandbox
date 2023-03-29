import {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import Lecture2 from './lecture2';
import Lecture3 from './lecture3';
import Lecture4 from './lecture4';
import Lecture5 from './lecture5';
import Lecture6 from './lecture6';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Exercise />
      </SafeAreaView>
    </>
  );
}

function Exercise() {
  const [lectureShown, setLectureShown] = useState(null);

  switch (lectureShown) {
    case 2:
      return (
        <>
          <BackButton setLectureShown={setLectureShown} />
          <Lecture2 />
        </>
      );
    case 3:
      return (
        <>
          <BackButton setLectureShown={setLectureShown} />
          <Lecture3 />
        </>
      );
    case 4:
      return (
        <>
          <BackButton setLectureShown={setLectureShown} />
          <Lecture4 />
        </>
      );
    case 5:
      return (
        <>
          <BackButton setLectureShown={setLectureShown} />
          <Lecture5 />
        </>
      );
    case 6:
      return (
        <>
          <BackButton setLectureShown={setLectureShown} />
          <Lecture6 />
        </>
      );
    default:
      return (
        <>
          <Button title="Lecture 2" onPress={() => setLectureShown(2)} />
          <Button title="Lecture 3" onPress={() => setLectureShown(3)} />
          <Button title="Lecture 4" onPress={() => setLectureShown(4)} />
          <Button title="Lecture 5" onPress={() => setLectureShown(5)} />
          <Button title="Lecture 6" onPress={() => setLectureShown(6)} />
        </>
      );
  }
}

function BackButton({setLectureShown}) {
  return <Button title="Back" onPress={() => setLectureShown(null)} />;
}

function Button({title, onPress}) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: 'gray',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    alignItems: 'center',
  },
});
