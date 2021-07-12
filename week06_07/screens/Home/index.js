import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { SCREEN_NAME } from '../../constants/screen';

const Home = props => {
  // closure : function inside function
  function navigate(screenName) {
    props.navigation.navigate(screenName);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30 }}>Home page</Text>
      {Object.values(SCREEN_NAME).map(screenName => {
        return (
          <Button
            onPress={() =>
              navigate({
                name: screenName,
                params: { from: 'home_page', to: screenName }, // to pass data to another screen
              })
            }
            mode="contained"
            style={{ margin: 3, padding: 3 }}>
            Go to {screenName}
          </Button>
        );
      })}
      <Button
        onPress={() =>
          navigate({
            name: 'Screen1',
          })
        }
        style={{ margin: 3, padding: 3 }}>
        Go to Screen1
      </Button>
    </View>
  );
};

export default Home;
