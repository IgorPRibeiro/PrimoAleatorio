import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native';
import Constants from 'expo-constants';
import styles from './styles.tsx'
import Filho from '../filho/filho'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



export default function Pai(props) {
  const [resultado, setResultado] = React.useState<any>([]);
  const [numero, setNumero] = React.useState<any>("");
  const [texto, setTexto] = React.useState<any>();



  const isPrime = (num : any) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
    return num > 1;
  };


  

  const attEstado = (primo,texto) => {
    setNumero(primo.toString())
    setTexto(texto)
  }

  return (
    <View style={styles.container}>
      
      
      <Filho minimo={props.min} maximo={props.max} primo={isPrime} attEstad={attEstado}/>
      
      <View>
        <Text style={styles.finalText}>
          Número Primo Gerado Aleatório entre {props.min ?props.min : 0 } é {props.max ?props.max : 0} :
        </Text>
      </View>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText} >
            {texto} {numero}          
          </Text>
        </View>
    </View>
  );
}