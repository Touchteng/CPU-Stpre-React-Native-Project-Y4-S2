import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={[styles.box]}>
            <Text style={styles.bigFontSize}>1</Text>
          </View>
          <View style={[styles.box]}>
            <Text style={styles.bigFontSize}>2</Text>
          </View>
          <View style={[styles.box, {position: 'absolute'}]}>
            <Text style={styles.bigFontSize}>3</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flexDirection: 'column',
    backgroundColor: '#aaa',
  },
  textStyle: {
    color: '#e00',
    backgroundColor: '#00e',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'flex-end',
  },
  box: {
    width: 80,
    height: 80,
    margin: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
  },
  bigFontSize: {
    textAlign: 'center',
    fontSize: 24,
  },
});
