import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux'
import Index from './src'
import Agregar from './src/Agregar'
import Mostrar from './src/Mostrar'
import Eliminar from './src/Eliminar'
import Editar from './src/EditarLIst'
console.disableYellowBox = true;
export default class db extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      updateText: '',
    }
  }

  render() {
    return (
      <Router>
        <Scene key="root" >
          <Scene key="index" component={Index} />
          <Scene key="agregar" component={Agregar} />
          <Scene key="mostrar" component={Mostrar} />
          <Scene key="eliminar" component={Eliminar} />
          <Scene key="editar" component={Editar} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  margin:{
    margin:4
  }
});

AppRegistry.registerComponent('db', () => db);
