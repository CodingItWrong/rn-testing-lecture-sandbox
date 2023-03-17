import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import api from './api';

export default function WidgetContainer() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    api.get('/widgets').then(response => {
      setWidgets(response.data);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={widgets}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
