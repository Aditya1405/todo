import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Boilerplate = function(){
    return(
        <View>
            <Text style={style.input}>boilerplate new</Text>
        </View>
    )
}

const style = StyleSheet.create({
   input:{
       fontSize:18,
   }
})

export default Boilerplate