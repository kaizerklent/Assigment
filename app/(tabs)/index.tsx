import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../sign/types';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Kaizer Klent C. Auceran</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
        </View>
        <View style={styles.button}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  Title: {
    color: 'black',
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    width: 150,
    height: 50,
    borderRadius: 15,
  },
});