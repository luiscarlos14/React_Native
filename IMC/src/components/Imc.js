import React, { useState } from 'react';
import { render } from 'react-dom';
import {Text,Button, TextInput, View } from 'react-native';
import estilo from '../styles/imcStyles'

 export default App = () => {

  const [peso,   setPeso]   = useState('')
  const [altura, setAltura] = useState('')
  const [saida,  setSaida]  = useState('')
  const [imc,    setImc]    = useState('')

  function CalculoImc(){ 
    const alt = altura / 100;
    const imc = peso / (alt * alt)

    setImc("Seu IMC é: " + imc.toFixed(2))
    
    if(alt == 0 && peso == 0){
      setSaida(' ')
      setImc(' ')
    }
    if(imc < 18.5){
      setSaida("Você está abaixo do peso!")
    }
    if(imc >= 18.5 && imc < 24.9){
      setSaida("Você está com peso normal!")
    }
    if(imc >= 25.0 && imc < 29.9){
      setSaida("Você está no sobrepeso!")
    }
    if(imc >= 30.0 && imc < 39.9){
      setSaida("Você está obeso!")
    }
    if(imc >= 40){
      setSaida("Você está muito obeso!")
    }
  }

  return (

        <View style={estilo.container}>
            <Text style={estilo.title}>Calcule seu IMC</Text>

            <TextInput 
                style={estilo.input} 
                value={altura}
                onChangeText={(altura) => setAltura(altura)}
                keyboardType='numeric'
                placeholder="Altura"
            />
            
            <TextInput 
                style={estilo.input} 
                value={peso}
                onChangeText={(peso) => setPeso(peso)}
                keyboardType='numeric'
                placeholder="Peso"
            />
           

          <View style={estilo.bnt}>
                <Button
                    title='Calcular'
                    onPress={CalculoImc}
                />
          </View>

          <Text style={estilo.saida}>{saida}</Text>
          <Text style={estilo.saida}>{imc}</Text>
            
            
        </View>

  );
}


