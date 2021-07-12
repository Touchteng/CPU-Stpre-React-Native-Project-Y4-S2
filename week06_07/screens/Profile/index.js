import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';

const Profile = props => {
  //* INFO: we can get from props if it is top level component to screen;
  // const params = props.route.params;
  // const navigation = props.navigation;
  const { params = {} } = useRoute(); // get from hook
  const navigation = useNavigation();

  useFocusEffect(() => {
    console.log('On focus');

    return () => {
      console.log('On blur');
      navigation.setParams({ from: null, to: null });
    };
  });

  useEffect(() => {
    console.log('Component didmount');

    return () => {
      console.log('Component willUnmount');
    };
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30 }}>Profile page</Text>
      <Text style={{ fontSize: 30 }}>
        From page:{params.from}, To page: {params.to}
      </Text>
      <Button
        onPress={() => navigation.goBack()}
        mode="contained"
        style={{ margin: 3, padding: 3 }}>
        Go back
      </Button>
    </View>
  );
};

export default Profile;
