import {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import api from './api';

export default function RestaurantContainer() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    api.get('/restaurants').then(response => {
      setRestaurants(response.data);
    });
  }, []);

  return (
    <View>
      <FlatList
        data={restaurants}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
