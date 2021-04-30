import React from 'react';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';
import Boilerplate from './src/screens/Boilerplate'
import TodayTask from './src/screens/TodayTask'
const nav = createStackNavigator({
  Tt:TodayTask,
  Bp:Boilerplate
},{
  InitialRouteName:'Tt',
  defaultNavigationOptions:{
    title:'TO-DO'
  }
})

const App = createAppContainer(nav)

export default function(){
  return(
    <App/>
  )
}
