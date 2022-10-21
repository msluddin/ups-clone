import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Input } from '@rneui/themed';
import { useState } from 'react';

const CustomersScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView style={{ backgroundColor: '#59C1CC' }}>
      <View>
        <Image
          source={{ uri: 'https://links.papareact.com/3jc' }}
          containerStyle={styles.item}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Input
          placeholder="Search by Customers"
          value={input}
          onChangeText={setInput}
          containerStyle={styles.input}
        />
      </View>
    </ScrollView>
  );
};

export default CustomersScreen;

const styles = StyleSheet.create({
  item: {
    aspectRatio: 1.5,
    width: '100%',
    maxHeight: 360,
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 0,
  },
});
