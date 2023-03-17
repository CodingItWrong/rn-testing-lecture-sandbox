import {useQuery} from '@tanstack/react-query';
import {FlatList, Text, View} from 'react-native';
import api from './api';

export default function WidgetContainer() {
  const {data: widgets = []} = useQuery(['widgets'], () =>
    api.get('/widgets').then(response => response.data),
  );

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
