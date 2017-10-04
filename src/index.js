import React from 'react'
import {
  View,
  Button,
  Text
} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class Index extends React.Component {

  render() {
    return (
      <View>
        <Button title="Agregar" onPress={() => {
          Actions.agregar();
        }} />
        <Button title="Eliminar" onPress={() => {
          Actions.eliminar();
        }} />
        <Button title="Editar" onPress={() => {
          Actions.editar();
        }} />
        <Button title="Mostrar" onPress={() => {
          Actions.mostrar();
        }} />
      </View>
    )
  }
}
