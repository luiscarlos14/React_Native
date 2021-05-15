import React, {Component} from 'react'
import { Button, Text, TextInput, View, StyleSheet } from 'react-native'
import estilo from '../estilo'

import MegaNumero from './MegaNumero'

export default class Mega extends Component{
    
    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdNumeros = (qtde) => {
        this.setState({qtdNumeros: +qtde})
    }

    gerarNumeroNaoContido = nums =>{
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

     gerarNumeros = () => {
        const numeros = Array(this.state.qtdNumeros).fill().reduce(n => [...n, this.gerarNumeroNaoContido(n)], []).sort((a, b) => a-b)
        this.setState({numeros})
    } 

    exibirNumeros = () =>{
        const nums = this.state.numeros
        return nums.map(num =>{
            return <MegaNumero key={num} num={num} />
        })
    }

    render(){
        return(
            <>
            <Text style={estilo.txtG}>
                Gerador de Mega-Sena 
            </Text>

            <TextInput
                keyboardType={'numeric'}
                style={{borderBottomWidth:1}}
                placeholder="Qtd de numeros"
                value={`${this.state.qtdNumeros}`}
                onChangeText={this.alterarQtdNumeros} />
            
            <View style={style.Bnt}>
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
            </View>

            <View style={style.Container}>
                {this.exibirNumeros()}
            </View>

            </>
        )
    }
}

const style = StyleSheet.create({

    Container:{
        marginTop:20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    Bnt: {
        paddingTop: 10
    }
   

})