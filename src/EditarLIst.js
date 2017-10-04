import React from 'react'
import {
  View, 
  Text, 
  Button, 
  TextInput, Alert, FlatList, 
  TouchableNativeFeedback, ToastAndroid,
  Modal
} from 'react-native'
import { db } from './database'

export default class EditList extends React.Component {
  constructor(props ) {
    super(props)
    this.state = {
      elementos: [],
      modalVisible: false,
      nombre:'', descripcion:'', _id:'', _rev:''
    }
  }

  changeModalVisible(){
    this.setState({modalVisible:!this.state.modalVisible})
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

  onPress = (doc) => {
    console.warn(doc._rev)
    this.setState({
      nombre:doc.nombre,
      descripcion:doc.descripcion,
      _id:doc._id,
      _rev:doc._rev
    })
    this.changeModalVisible();
  }

  saveChanges = () => {
    db.put({
      _id:this.state._id,
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      _rev: this.state._rev
    }).then(asd => {
      ToastAndroid.show('Editado con exito', ToastAndroid.SHORT)
      this.changeModalVisible()
      this.changeElements()
    })
    .catch(asd => {console.warn('error')})
  }
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View>
            <TextInput value={this.state.nombre} onChangeText={(nombre => this.setState({nombre}))} />
            <TextInput value={this.state.descripcion} onChangeText={(descripcion => this.setState({descripcion}))} />            
            <TouchableNativeFeedback onPress={() => this.changeModalVisible()} >
              <View>
                <Text>Cerrar</Text>
              </View> 
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => this.saveChanges()} >
            <View>
              <Text>Guardar</Text>
            </View> 
          </TouchableNativeFeedback>
          </View>
        </Modal>

        <Text style={{marginBottom:20, fontSize:20}} >
          Editar Elementos
        </Text>
        <FlatList
          data={this.state.elementos}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <TouchableNativeFeedback onPress={() => this.onPress(item)} >
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
