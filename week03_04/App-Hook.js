import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('Incorrect Email');
  
  // Not allow to use this
  // let error, setError;
  // if(!email.endsWith('.com')) {
  //   [error, setError] = useState('Incorrect Email');
  // }

  const [isIntitialized, setIsInitialized] = useState(false);

  function onInputChange(value) {
    setEmail(value);
  }

  useEffect(() => {
    if (isIntitialized && !email.endsWith('.com')) {
      setError('Incorrect Email');
    } else {
      setError('');
    }
  }, [email]);

  useEffect(() => {
    alert('On first render');
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    alert('On re-render');
  });

  return (
    <View>
      <TextInput
        style={{ borderColor: 'black', borderWidth: 1, margin: 5 }}
        placeholder="Input your email adress here..."
        onChangeText={onInputChange}
      />
      {error ? <Text>{error}</Text> : <></>}
    </View>
  );
};
