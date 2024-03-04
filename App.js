import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome , sobrenome, outro) => { 
  return nome + ' ' + sobrenome + outro;
}

const Cat = ({nome}) => {
  return <Text>Hello, I am abc {getNomeCompleto(nome, 'Lasanha', 'Outro').toUpperCase()}!</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat nome = 'black'/>
      <Cat nome = 'apolo'/>
      <Cat nome = 'pink'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});