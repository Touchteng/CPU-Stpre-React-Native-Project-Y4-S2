import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Item from './components/Item';
import ListItem from './components/ListItem';
import ListItemContext from './context/ListItemContext';

export default () => {
  const items = ['Apple', 'Banana', 'Cat', 'Dog', 'Eat'];
  const [selectedItem, setSelectedItem] = useState([]);

  function logSelectedItem(params) {
    // call api here
    // setSelectedItem([...selectedItem, params]);
  }

  return (
    <View>
      <ListItem
        items={items}
        selectedItem={'Cat'}
        disabledItems={selectedItem}
        onSelectedItem={logSelectedItem}
        itemPros={{
          style: {
            color: 'red',
            padding: 10,
          },
        }}
      />
      <ListItem
        items={['Cat']}
        itemPros={{
          style: {
            color: 'blue',
            padding: 0,
          },
        }}
      />
    </View>
  );
};
