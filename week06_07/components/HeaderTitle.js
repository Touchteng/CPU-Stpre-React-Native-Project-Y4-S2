import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HeaderTitle = ({ children, tintColor, name, ...otherProps }) => {
  return (
    <Icon
      {...otherProps}
      style={{
        color: tintColor,
        fontSize: 20,
        width: '100%',
        textAlign: 'center',
      }}
      name={name}>
      <Text>{children}</Text>
    </Icon>
  );
};

export default HeaderTitle;
