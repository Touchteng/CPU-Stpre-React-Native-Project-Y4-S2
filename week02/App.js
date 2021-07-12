import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <TextInput placeholder="Input your email here..." />
        <TextInput placeholder="Input your password here..." />
        <Button color="red" title="Click me" onPress={() => alert('Hello')} />
        <MyButton title="Click me 2" style={{backgroundColor: 'red'}}  />
      </View>
    </SafeAreaView>
  );
}

const MyButton = ({title, style, ...props}) => {
  const [opacity, setOpacity] = React.useState(1);
  return (
    <TouchableWithoutFeedback
      onPressIn={() => setOpacity(0.1)}
      onPressOut={() => setOpacity(1)}>
      <View
        style={[
          styles.customButon,
          {opacity},
          Platform.OS == 'ios' && {shadowColor: '#aaa'},
          style,
        ]}
        {...props}>
        <Text>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  customButon: {
    backgroundColor: 'aqua',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,

    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    elevation: 20,
  },
});
