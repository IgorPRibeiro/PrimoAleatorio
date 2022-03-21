import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';
import Pai from './components/pai/pai';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [minimo, setMinimo] = React.useState("");
  const [maximo, setMaximo] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.paragraph}>
          O valor minimo
        </Text>
        <TextInput 
          style={styles.input}  
          placeholder="Valor min"
          keyboardType="numeric" 
          onChangeText={(text) => setMinimo(text)}
          value={minimo}
        />
         <Text style={styles.paragraph}>
          O valor maximo
        </Text>
        <TextInput 
        style={styles.input}   
        placeholder="Valor max"
        keyboardType="numeric"
        onChangeText={(text) => setMaximo(text)}
        value={maximo}
        />
      </View>
      <Pai min={minimo} max={maximo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding:10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    paddingHorizontal:10
  },
  input: {
    borderWidth:1,
    borderColor: 'black',
    borderRadius: 50,
    padding: 5
  },
  

});
