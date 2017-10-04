import React from 'react'
import {
  View, Text, Button, TextInput, Alert, FlatList
} from 'react-native'
import { db } from './database'

export default class Mostrar extends React.Component {
  constructor(props ) {
    super(props)
    this.state = {
      elementos: []
    }
  }

  componentWillMount() {
    db.allDocs().then(docs => {
      let elementos = [];
      for(let row of docs.rows) {
        elementos.push(row.doc);
      }
      this.setState({elementos})
    })
  }
  render() {
    return (
      <View>
        <Text>
          Lista de elementos
        </Text>
        <FlatList
          data={this.state.elementos}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <Text style={{borderBottomWidth:.3, height:30, alignContent:'center', alignItems:'center', flex:1}} >
              <Text>
              {item.nombre}: 
              </Text>
              <Text>
              {" " + item.descripcion}
              </Text>
            </Text>
          )} 
        />
      </View>
    )
  }
}
