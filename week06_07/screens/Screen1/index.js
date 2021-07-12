import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

const Screen1 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30 }}>Screen1</Text>
      <Button
        onPress={() =>
          navigation.navigate({
            name: 'Screen2',
          })
        }
        style={{ margin: 3, padding: 3 }}>
        Go to Screen2
      </Button>
    </View>
  );
};

export default Screen1;
