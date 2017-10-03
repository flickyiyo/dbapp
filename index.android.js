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
import PouchDB from 'pouchdb'

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
      <View style={styles.container}>
        <TextInput
          style={{width:200}}
          value={this.state.inputText}
          onChangeText={(inputText) => {
            this.setState({inputText})
          }}
          placeholder='Text'
        />
        <Button style={styles.margin} title='Buscar' />
        <Button style={styles.margin} title='Eliminar' />
        <Button style={styles.margin} title='Agregar' />
        <View>
          <TextInput
            style={{width:200}}
            value={this.state.updateText}
            onChangeText={(newText) => {
              this.setState({updateText: newText})
            }}
          />
        </View>
        <View>
          <Text>
            Aqui va una lista
          </Text>
        </View>
      </View>
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
