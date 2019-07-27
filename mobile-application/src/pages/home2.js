import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';
import fuelClaim from './fuelClaim' ;
import miscClaim from './miscClaim'

export default class LoginView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tracker: false,
            email   : '',
            password: '',
            kmBefore: 0,
            kmAfter: 0,
        }
    }

    onLoginClickListener = (ocr) => {
        this.props.navigation.navigate('OCR')
    }
    
    onMiscClaimClickListener = (start) => {
        this.props.navigation.navigate('MISCCLAIM')
    }

    onFuelClaimClickListener = (end) => {
        this.props.navigation.navigate('FUELCLAIM')
    }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <TouchableHighlight 
                    style={styles.buttonContainer}
                    onPress={() => this.onMiscClaimClickListener('fuelClaim')}
                >
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/check/ultraviolet/100/3498db'}}/>
                </TouchableHighlight>
            
                {/*!this.state.tracker ?(
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onRegisterClickListener('start')}>
                    <Text style={styles.loginText}>start</Text>
                </TouchableHighlight>
                ):(
                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onRegisterClickListener('end')}>
                    <Text>end</Text>
                </TouchableHighlight>
                )*/}
            
                <TouchableHighlight 
                    style={styles.buttonContainer}
                    onPress={() => this.onFuelClaimClickListener('miscellaneous')}
                >
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/gas-station/ultraviolet/100/3498db'}}/>
                </TouchableHighlight>
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
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:50,
    height:50,
    //marginLeft:15,
    alignItems:'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    height:90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:90,
    borderRadius:45,
    backgroundColor: "#00FFFF",
  },
  loginButton: {
    backgroundColor: "#8AD32E",
  },
  loginText: {
    color: 'white',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 12,
    width: '100%'
    }
});