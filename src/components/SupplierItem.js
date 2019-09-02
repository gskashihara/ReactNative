import React, { Component } from 'react';

import { View, StyleSheet,Text,Image,TouchableOpacity } from 'react-native';

export default class SupplierItem extends Component{
    render(){
        return (
            <TouchableOpacity onPress={this.props.onNavigate} >
                <View style={styles.resultItem} >
                    <Image
                            style={styles.resultImage}
                            source={{uri: this.props.data.logoUrl ? this.props.data.logoUrl :'http://basquete3x3.com.br/wp-content/themes/anb3x3/images/instagram-icon.png'}}
                    />

                    <View style={styles.resultInfo}>
                        <Text style={styles.resultRazao}> {this.props.data.name}</Text>
                        <Text style={styles.resultDoc}>{this.props.data.documents ? this.props.data.documents[0].value : "-" } </Text>
                        <Text style={styles.resultAtividadePrincipal}> {this.props.data.principalActivity} </Text>
                    </View>
            </View>
          </TouchableOpacity >
        );
    }
}

const styles = StyleSheet.create({

    resultItem: {
        marginTop:10,
        backgroundColor: "#FFF",
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
  
    resultImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginLeft: 20,
    },
  
    resultInfo: {
        marginLeft:10,
    },
  
    resultRazao:{
        fontWeight: 'bold',
        color: '#333',
    },
  
    resultDoc:{
        fontSize: 12,
        color: '#999'
    },

});