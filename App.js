import {useState} from 'react';
import {Button, SafeAreaView, StatusBar} from 'react-native';
import Lecture2 from './lecture2';
import Lecture3 from './lecture3';
import Lecture4 from './lecture4';
import Lecture5 from './lecture5';

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
    default:
      return (
        <>
          <Button title="Lecture 2" onPress={() => setLectureShown(2)} />
          <Button title="Lecture 3" onPress={() => setLectureShown(3)} />
          <Button title="Lecture 4" onPress={() => setLectureShown(4)} />
          <Button title="Lecture 5" onPress={() => setLectureShown(5)} />
        </>
      );
  }
}

function BackButton({setLectureShown}) {
  return <Button title="Back" onPress={() => setLectureShown(null)} />;
}
