import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

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

  return <Text>Hola, yo soy {getNomeCompleto(nome, sobrenome).toUpperCase()} y mi edad es {idade} {texto}</Text>
}

export default IFAL;

function IFAL() {


  const [cliques, setCliques] = useState(0);

  return (
    <View style={styles.container}>
      <Cat nome = 'black' sobrenome='pink' idade={1}/>
      <Cat nome = 'apolo' sobrenome='titã' idade={0}/>
      <Cat nome = 'garfield'sobrenome='lasanha' idade={-2}/>
      <StatusBar style="auto" />
    <View style={styles.botoes}>
      <Button title='ClicK' onPress={() => {
        setCliques(cliques + 1);
      }} />  
     <Button title='zerar' onPress={() => {
        setCliques(0);
      }} />
      </View>
      <Text>Quantidade de cliques: {cliques}</Text>
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
  botoes: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    width: '50%'
    
  }
});