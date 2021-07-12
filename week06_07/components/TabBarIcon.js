import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TabBarIcon = props => {
  const { focused, color, size, name } = props;
  return (
    <Icon
      style={{ fontSize: size, color: focused ? color : 'green' }}
      name={name}
    />
  );
};

export default TabBarIcon;
