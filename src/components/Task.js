import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const Task = function(props){
    return(
        <View style={style.item}>
            <View style={style.itemLeft}>
                <View style={style.square}/>
                <Text style={style.itemText}>{props.text}</Text>
            </View>
            <View style={style.circular}/>
        </View>
        
    )
}

const style = StyleSheet.create({
    item:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flexWrap:'wrap',
        marginBottom:20,
        marginLeft:5,
        marginRight:5
    },
    square:{
        width:24,
        height:24,
        backgroundColor:'black',
        opacity:0.4,
        borderRadius:5,
        margin:15
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    circular:{
        width:15,
        height:15,
        borderRadius:5,
        borderWidth:2,
        borderColor:'black'
    },
    itemText:{maxWidth:'80%'}
})

export default Task