import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome , sobrenome) => { 
  return nome + ' ' + sobrenome;
}

const Cat = ({nome, sobrenome, idade}) => {2
  return <Text>Hello, I am {getNomeCompleto(nome, sobrenome).toUpperCase()} and my age is {idade}!</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat nome = 'black' sobrenome='pink' idade={15}/>
      <Cat nome = 'apolo' sobrenome='titã' idade={12}/>
      <Cat nome = 'garfield'sobrenome='lasanha' idade={21}/>
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