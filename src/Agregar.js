import React from 'react'
import {
  View, Text, Button, TextInput, Alert
} from 'react-native'
import { db } from './database'
export default class Agregar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      descripcion: '',
    }
  }
  render() {
    return (
      <View style={{flex:1, alignItems:'center'}} >
        <Text>
          Agregar elemento
        </Text>
        <View style={{flex:1}}>
          <TextInput
            style={{width:200}}
            value={this.state.nombre}
            onChangeText={(nombre) => this.setState({nombre})}
            placeholder="Nombre"
          />
          <TextInput
            value={this.state.descripcion}
            onChangeText={(descripcion) => this.setState({descripcion})}
            placeholder="Descripcion"
          />
          <Button title='Agregar' onPress={() => {
            db.post({
              nombre:this.state.nombre,
              descripcion: this.state.descripcion
            }).then(data => {
              console.warn(JSON.stringify(data))
              Alert.alert('Creado con exito', 'Elemento agregado');
            })
          }}/>
        </View>
      </View> 
    )
  }
}