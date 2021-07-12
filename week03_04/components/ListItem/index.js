import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import Item from '../Item';

export default ({
  items = [],
  selectedItem,
  onSelectedItem,
  disabledItems,
  itemPros,
}) => {
  return (
    <View>
      {items.map(item => (
        <Item
          key={item}
          item={item}
          selectedItem={selectedItem}
          onSelectedItem={onSelectedItem}
          disabledItems={disabledItems}
          {...itemPros}
        />
      ))}
    </View>
  );
};
