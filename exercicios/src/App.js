import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

/*import Primeiro from './components/Primeiro'
import MinMax from './components/MinMax'
import {Comp2, Comp3} from './components/Multi'
import Ale from    './components/Aleatorio'
import Titulo from './components/Titulo'
import Contador from './components/Contador'
import Pai from './components/direta/Pai';
import Pai from './components/indireta/Pai'
import ContadorDisplay from './components/contador/ContadorV2';
import Botao from './components/botao'*/
import ParImpar from './components/ParImpar';


export default () => (

<SafeAreaView style={style.App}> 
    <ParImpar />

{/* <MinMax min={3} max={20} />
<ContadorDisplay />
// <Comp2 />  
<ContadorDisplay />
// <Comp3 />  
// <Primeiro />
// <Ale num1={5} num2 ={10}/> 

// <Titulo principal="Cadastro" secundario="Tela de Cadastro do produto" />
// <Contador inicial={100} passo={13} />
// <Contador />
// <Pai />
// <Botao />
//<Pai /> */}


</SafeAreaView>

)

const style = StyleSheet.create({
    App:{
        flexGrow: 1,
        justifyContent: "center",
        alignItems:"center",
        padding: 20
    }
})

