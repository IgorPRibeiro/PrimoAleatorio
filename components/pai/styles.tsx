import { Text, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 25
  },

  
  finalText: {
    color: "#0b2e59",
    fontSize:26,
    marginVertical: 15
  },

  resultContainer: {
    borderWidth:1,
    borderRadius: 6,
    backgroundColor: "#31ada1",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  
  resultText: {
    color: 'white'
  }

});


export default styles;