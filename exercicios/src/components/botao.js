import React from 'react'
import { Button, Text } from 'react-native'

export default props =>{

    function executar(){
        console.warn('Exec!!!')
    }

    return(
        <>

        <Button 
        title="Executar #01"
        onPress={executar}
        />
        <Button 
        title="Executar #02"
        onPress={
            function executar(){
                console.warn('Exec2!!!')
            }
        }
        />

        <Button 
        title="Executar #03"
        onPress={() => console.warn('Exec3!!!') }
        />

        </>
    )
}