import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30 }}>Screen2</Text>
      <Button
        onPress={() =>
          navigation.navigate({
            name: 'Screen3',
          })
        }
        style={{ margin: 3, padding: 3 }}>
        Go to Screen3
      </Button>
    </View>
  );
};

export default Screen2;
