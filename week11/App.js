import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
// import AsyncStorage from './Storage';
import ItemLocalStore from './Storage/ItemLocalStore';

export default () => {
  const [item, setItem] = useState();
  const [saveItem, setSaveItem] = useState();

  async function getItemFromStorage() {
    const localItem = await ItemLocalStore.getValue();
    setSaveItem(localItem);
  }

  async function setItemToStorage(item) {
    await ItemLocalStore.setValue(item);
    setSaveItem(item);
  }

  useEffect(() => {
    getItemFromStorage();
  }, []);

  return (
    <View>
      <TextInput placeholder="Input item" onChangeText={setItem} />
      <Button onPress={() => setItemToStorage(item)}>Save Item</Button>
      <View>
        <Text style={{ fontSize: 40 }}>{saveItem}</Text>
      </View>
    </View>
  );
};
