import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ListItemContext from '../../context/ListItemContext';

// export default props => {
//   const { selectedItem, setSelectedItem } = React.useContext(ListItemContext);
//   const { item } = props;
//   return (
//     <TouchableOpacity onPress={e => setSelectedItem(item)}>
//       <View style={[styles.item, item === selectedItem && styles.active]}>
//         <Text>{props.item}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

class Item extends React.Component {
  state = {};
  render() {
    const {
      item,
      onSelectedItem,
      selectedItem,
      disabledItems,
      ...remainProps
    } = this.props;
    return (
      <TouchableOpacity onPress={e => onSelectedItem(item)}>
        <View
          style={[
            styles.item,
            selectedItem == item && styles.active,
            disabledItems.includes(item) && styles.disable,
          ]}>
          <Text {...remainProps}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Item.defaultProps = {
  onSelectedItem: () => {},
  disabledItems: [],
};

export default Item;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#aaa',
    margin: 10,
    padding: 10,
  },
  active: {
    backgroundColor: '#0a0',
  },
  disable: {
    backgroundColor: '#555',
  },
});
