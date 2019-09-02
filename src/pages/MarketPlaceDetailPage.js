import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, ScrollView  } from 'react-native';
import Line from '../components/Line';

class MarketPlaceDetailPage extends React.Component{
    render(){
        const { supplier } = this.props.navigation.state.params;
            
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerLogo}>
                        <Image 
                            style={styles.image}
                            source={{uri: supplier.logoUrl ? supplier.logoUrl :'http://basquete3x3.com.br/wp-content/themes/anb3x3/images/instagram-icon.png'}}
                        />
                    </View>

                    <View style={styles.containerDados}>
                        <Line label="Razão Social: " content={supplier.name} />
                        <Line label="Nome Fantasia: " content={supplier.tradingName} />
                        <Line label="CNPJ: " content={supplier.documents ? supplier.documents[0].value : "-" } />
                        <Line label="Atividade Principal: " content={supplier.principalActivity ? supplier.principalActivity : "-"} />
                    </View>

                </View>
            </ScrollView>
        )
    }
}
        
const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: 'white',
    },
    containerLogo:{
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        flex:1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5',
    },
    image: {
      width: 200,
      height: 200,
      
    },
    containerDados:{
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5',
    }
});

export default MarketPlaceDetailPage;