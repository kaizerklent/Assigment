import {StyleSheet, View, Text} from 'react-native';

export default function HomeScreen() {
  return (  
      <View>
        <Text style={styles.Title}>Kaizer Klent C. Auceran</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  Title: {
    color: 'black',
    textAlign: 'center',
    marginTop: 300,
    fontSize: 40,
  },
});
