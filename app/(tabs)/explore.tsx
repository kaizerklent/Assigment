import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

const TabTwoScreen: React.FC = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.h1}>Assignments</Text>
        <View style={styles.box}>
          <Text style={styles.text}>Exercises 1</Text>
          <Text style={styles.h2}>Install React Native</Text>
          <Text style={styles.h3}>Create two tabs:</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Exercise 2</Text>
          <Text style={styles.h2}>Create two tabs:</Text>
          <Text style={styles.h3}>
            • Home – In the Home tab, display your full name.{"\n"}
            • Exercise – In the Exercises tab, create cards that list the exercises with descriptions rendered in HTML.For rendering HTML you can use this package: https://www.npmjs.com/package/react-native-htmlview
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>Exercise 3</Text>
          <Text style={styles.h2}>Exercise 2 Continuation</Text>
          <Text style={styles.h3}>
            • Email (Text Input){"\n"}
            • Password (Text Input){"\n"}
            • Login (Button)
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>This is a box!</Text>
          <Text style={styles.h2}>This program was for fun only</Text>
          <Text style={styles.h3}>Create two tabs:</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    marginTop: 40,
    textAlign: 'center',
  },
  box: {
    width: 390,
    height: 200,
    margin: 10,
    marginLeft: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  h2: {
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 20,
  },
  h3: {
    textAlign: 'justify',
    color: '#FFFFFF',
    marginLeft: 50,
  },
});

export default TabTwoScreen;