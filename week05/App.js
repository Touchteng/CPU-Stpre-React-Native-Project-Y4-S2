import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

export default () => {
  const [visible, setVisible] = React.useState(true);
  function onDismiss() {
    setVisible(false);
  }
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Button
        icon={iconStyle => (
          <Icon style={{ fontSize: 25, ...iconStyle }} name="customerservice" />
        )}
        mode="contained"
        onPress={() => console.log('Pressed')}>
        <Text style={{ fontSize: 25 }}> Press me</Text>
      </Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismiss}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        Hey there! I'm a Snackbar.
      </Snackbar>
    </SafeAreaView>
  );
};
