import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {

    let n1 = parseInt(props.num1);
    let n2 = parseInt(props.num2);

return(

<Text style={Estilo.txtG}>

{ parseInt(Math.random() * (n2 - n1) + n1) }

</Text>
)
  
}



