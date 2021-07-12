import React, { Component, useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import ListItemStore from './Storage/ListItemStore';

export default () => {
  const [item, setItem] = useState();
  const [saveItems, setSaveItems] = useState([]);

  async function getItemFromStorage() {
    const localItems = await ListItemStore.getAll();
    setSaveItems(localItems);
  }

  async function addItemToStorage(item) {
    await ListItemStore.add(item);
    setSaveItems([...saveItems, item]);
  }

  useEffect(() => {
    getItemFromStorage();
  }, []);

  return (
    <View>
      <TextInput placeholder="Input item" onChangeText={setItem} />
      <Button onPress={() => addItemToStorage(item)}>Add Item</Button>
      <View>
        {saveItems.map(saveItem => (
          <Text style={{ fontSize: 40 }}>{saveItem}</Text>
        ))}
      </View>
    </View>
  );
};
