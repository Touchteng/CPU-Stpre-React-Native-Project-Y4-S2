import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

const Screen3 = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30 }}>Screen3</Text>
      <Button
        onPress={() =>
          navigation.navigate({
            name: 'Screen4',
          })
        }
        style={{ margin: 3, padding: 3 }}>
        Go to Screen4
      </Button>
    </View>
  );
};

export default Screen3;
