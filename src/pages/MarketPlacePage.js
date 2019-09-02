import React, { Component } from 'react';
import {View, Text, StyleSheet,Keyboard, ScrollView, FlatList,ActivityIndicator  } from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import SupplierItem from '../components/SupplierItem';
import Loader from '../components/Loader';

class MarketPlacePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            term: '',
            suppliers: [],
            loading: false,
            page: 0,
        }
    }

    static navigationOptions = {
        // headerTitle instead of title
        header: null,
      };

    loadSuppliers = async (action) => {

        if (this.state.loading) return;

        this.setState({ loading: true });

        let { term, page } = this.state;

        if(action === "new"){
            page = 0;
            this._flatList.scrollToOffset({ offset: 0, animated: true });
        }

        
        
        this.getSuppliersAsync(term, page)
            .then((response) => {

                this.setState({
                    loading: false,
                    suppliers: page === 0 ? response.data.suppliers :  [ ...this.state.suppliers, ...response.data.suppliers ] ,
                    page: page + 1
                });
          
            })
            .catch((error) =>{
                console.log("ERRO");
                alert(error);
                this.setState({ loading:false })
            })

        Keyboard.dismiss();

    }

    getSuppliersAsync = async (term, page) =>{
        try {
            var config = {
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'}
            };
            console.log("term ", term, " Page ", page)  ;
            let response = await axios.post('https://qa.me.com.br/do/api/v1/marketplace/GetSuppliers', { term: term, page: { number: page , size: 10} }, config);

            return response;
        }
        catch(error) {
            console.log("ERRO getSuppliersAsync");
            alert(error);
            this.setState({ loading:false })
        }  

    }

    searchSupplier = () => {
        this.loadSuppliers('new');
    }
        
    componentDidMount(){
        this.loadSuppliers();
    }   

    renderFooter = () => {
        if(this.state.suppliers.length === 0){
            return (
                <View style={styles.emptyResultContainer}>
                    <Text style={styles.emptyResultText}>Nenhum Resultado Encontrado</Text>
                </View>
            );
        }

        return null;
    
      };


    render(){
        return (
            <View style={styles.container} >
                <Header term={this.state.term} onChangeTerm={(text) => this.setState({ term: text})} searchSupplier={ () => this.searchSupplier()}  />
                
                <Loader visible={this.state.loading} />

                 <FlatList
                    ref={(ref) => { this._flatList = ref; }}
                    data={this.state.suppliers}
                    renderItem={({item}) =>(
                        <SupplierItem key={item.id} data={item} onNavigate={() => this.props.navigation.navigate('MarketPlaceDetailPage', { supplier: item })} />
                    )}
                    keyExtractor={item => item.id}
                    onEndReached={this.loadSuppliers}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={this.renderFooter}
                    initialNumToRender={10}
                />

            </View>
        );
    }
}
    
const styles = StyleSheet.create({
   container:{
        flex: 1,
        marginTop: 20,
   },
   loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },

  emptyResultContainer: {
      marginTop: 20,
      marginLeft: 20,

  },

  emptyResultText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray'
  }
});

export default MarketPlacePage;