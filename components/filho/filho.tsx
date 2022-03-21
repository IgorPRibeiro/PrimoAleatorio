import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native';
import Constants from 'expo-constants';
import styles from './styles.tsx'

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function Filho(props) {



  const gamb = (min: any, max: any) => {

    let listaNum = []
    for (let i = parseInt(min); i <= parseInt(max); i++){
      if(props.primo(i)) {
        listaNum.push(i)
      }
    }
    let valor = listaNum[Math.floor(Math.random()*listaNum.length)]
    console.log("lista",valor)

    return valor.toString()
  }


  return (
    <View >
      
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          let primo = gamb(props.minimo,props.maximo)
          props.attEstad(primo,"número primo é ")
        }}
      >
        <Text style={styles.buttonText}>GERAR PRIMO</Text>
      </TouchableOpacity>
      
    </View>
  );
}