import React from 'react';
import {StyleSheet,View, Text} from 'react-native';

const Line = ({label ="", content= "-"}) => {
    return (
        <View style={styles.line}>
            <Text style={[
                    styles.cell,
                    styles.label
            ]}>{label}</Text>
            <Text style={[styles.cell, styles.content]}>{ content }</Text>
        </View>
    );
}

 const styles = StyleSheet.create({
    line:{
        flexDirection: 'row',
        // borderWidth: 1,
        // borderColor: '#c5c5c5',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 10,
    },
    cell:{
        fontSize: 16,
        paddingLeft: 5,
    },
    label:{
        fontWeight: 'bold',
        flex: 1,
        color: '#BABABA'
    },
    content:{
        flex: 2,
        color: 'black',

    },
    longLabel:{
        fontSize:12,
    }
    
});

export default Line;
