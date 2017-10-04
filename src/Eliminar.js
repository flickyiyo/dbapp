import React from 'react'
import {
  View, 
  Text, 
  Button, 
  TextInput, Alert, FlatList, 
  TouchableNativeFeedback, ToastAndroid
} from 'react-native'
import { db } from './database'

export default class Eliminar extends React.Component {
  constructor(props ) {
    super(props)
    this.state = {
      elementos: []
    }
  }

  changeElements() {
    db.allDocs().then(docs => {
      let elementos = [];
      for(let row of docs.rows) {
        elementos.push(row.doc);
      }
      this.setState({elementos})
    })
  }

  componentWillMount() {
   this.changeElements()
  }

  onPress = (id) => {
    Alert.alert('Eliminar Elemento',
    'Esta seguro que desea eliminar elemento?',
    [
      {text:'Eliminar', onPress:() => {
        db.get(id).then(doc => {
          return db.remove(doc);
        }).then(a => {
          this.changeElements();
          ToastAndroid.show('Elemento Eliminado', ToastAndroid.SHORT)
        })
      }} 
    ]
    )
  }

  render() {
    return (
      <View>
        <Text style={{marginBottom:20, fontSize:20}} >
          Eliminar Elementos
        </Text>
        <FlatList
          data={this.state.elementos}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <TouchableNativeFeedback onPress={() => this.onPress(item._id)} >
              <View style={{flex:1,height:50, justifyContent:'center'}} >
                <Text style={{borderBottomWidth:.3, alignContent:'center', alignItems:'center', flex:1}} >
                  <Text>
                    {item.nombre}: 
                  </Text>
                  <Text>
                    {" " + item.descripcion}
                  </Text>
                </Text>
              </View>
            </TouchableNativeFeedback>
          )} 
        />
      </View>
    )
  }
}
