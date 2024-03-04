import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const getNomeCompleto = (nome , sobrenome) => { 
  return nome + ' ' + sobrenome;
}

const Cat = ({nome, sobrenome, idade}) => {
//   let texto = ' anos'
//   if(idade < 1){
//     texto = '\nIdade não é aceitável, insira uma idade em anos'
//   }
//   else if(idade == 1){
//     texto =  'y mi edad es ' + idade + ' ano'
//   }
//   else{
//     texto = 'y mi edad es ' + idade + texto
//   }
    
  const texto = (idade <= 1) ? 'ano' : 'anos'

  return <Text>Hola, yo soy {getNomeCompleto(nome, sobrenome).toUpperCase()} {texto}</Text>
}

export default IFAL;

function IFAL() {
  return (
    <View style={styles.container}>
      <Cat nome = 'black' sobrenome='pink' idade={1}/>
      <Cat nome = 'apolo' sobrenome='titã' idade={0}/>
      <Cat nome = 'garfield'sobrenome='lasanha' idade={-2}/>
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