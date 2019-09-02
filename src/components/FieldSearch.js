import React from 'react';
import { View, StyleSheet,TouchableHighlight,Keyboard,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const FieldSearch = (props) => {  

    const { term, onChangeTerm, searchSupplier } = props;

    return(
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    onChangeText={ term => {onChangeTerm(term)}}
                    value={term} underlineColorAndroid='transparent'
                    placeholder='Busca...'
                        />
            </View>
                
            <View style={styles.buttonContainer}>
                    <TouchableHighlight 
                    style={styles.buttonAdd}
                    onPress={() => {searchSupplier()}}
                    underlayColor='rgba(0, 0, 0, 0.1)' >
                    <Icon name="search" size={22} color="#777676" /> 
                </TouchableHighlight>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },

    inputContainer: {
        flex: 6,
    },

    buttonContainer: {
        flex: 1
    },
    
    buttonAdd: {
        backgroundColor: 'transparent',
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0, 
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    input: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 18,
        height: 40,
    }

});


export default  FieldSearch;