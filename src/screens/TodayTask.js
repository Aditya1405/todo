import React,{useState} from 'react'
import {Text, View, StyleSheet, KeyboardAvoidingView, TextInput,TouchableOpacity} from 'react-native'
import Task from '../components/Task';
const TodayTask = function(){
    //handling states
    const [text,setText] = useState('')
    const [task,setTask] = useState([])
    //log
    const handleTask=function(){
        setTask([...task,text])
        setText(null)
        console.log(task)
    }
    return(
        <View style={style.container}>
            <Text style={style.sectionTitle} >Today's Task </Text>
            <View style={style.items}>
                <Task text={'Task 1'}/>
                <Task text={'Task 2'}/>
                <Task text={'Task 3'}/>
            </View>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={style.writeTaskWrapper}>
                <TextInput 
                    style={style.input} 
                    placeholder={'write a task'}
                    value={text} 
                    onChangeText={(text)=>{setText(text)}}
                />
                <TouchableOpacity onPress={()=>{handleTask()}}>
                    <View style={style.addWrapper}>
                        <Text style={style.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
      },
      tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
      },
      items: {
        marginTop: 30,
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
      addText: {},
})

export default TodayTask