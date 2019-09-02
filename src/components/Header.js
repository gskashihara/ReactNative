import React, { Component } from 'react';
import {StyleSheet,View, Text, Image} from 'react-native';
import { LinearGradient } from 'expo';
import FieldSearch from './FieldSearch';

const Header = (props) => {

    const { term, onChangeTerm, searchSupplier} = props;

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.gradient}
                                colors={['#00E0DD', '#0089CD']}
                                start={{x: 1, y: 0.5}}>
                <View style={styles.containerTitle}>
                    <Image style={styles.logo} source={{ uri: 'https://me.com.br/do/Assets/MarketPlace/img/mercado_eletronico_2-04-white-cutted.png'}} />
                    <Text style={styles.title} >MarketPlace</Text>
                </View>

                <FieldSearch term={term} searchSupplier={searchSupplier} onChangeTerm ={onChangeTerm}  />


            </LinearGradient>
        </View>
    );

}
     
 const styles = StyleSheet.create({
    container:{
        height: 130,
    },

    gradient:{
        flex: 1,
    },

    containerTitle:{
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 20,
    },

    logo:{
        height: 28,
        width: 40,
    },

    title: {
        paddingLeft: 10,
        color : 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
  });

  export default Header;