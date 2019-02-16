import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

function SvgTest() {
  return (
    <Svg height="100%" width="100%" viewBox="0 0 100 100">
      <Path d="M0,0 L100,100" stroke="black" />
    </Svg>
  );
}

const Home = () => {
  const [display, setDisplay] = useState('flex');
  return (
    <View>
      <TouchableOpacity
        onPress={() => setDisplay(display === 'flex' ? 'none' : 'flex')}
      >
        <Text style={styles.text}> Testing display attribute </Text>
      </TouchableOpacity>
      <View style={[styles.svg, { display }]}>
        <SvgTest />
      </View>
    </View>
  );
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: '#333333',
  },
  svg: {
    alignItems: 'center',
  },
});
