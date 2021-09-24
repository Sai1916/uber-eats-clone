import React, { useState } from 'react'
import { View,Text,TouchableOpacity } from 'react-native';

function Tabs({navigation}) {
  const [clicked,setClicked]=useState("Delivery")
    return (
      <View style={{flexDirection: "row",alignItems:"center",justifyContent:"center",backgroundColor:"white",width:"100%"}}>
        <TouchableOpacity><Text style={{fontSize: 20,fontWeight:"900",backgroundColor:"black",color:"white",paddingVertical:10,paddingHorizontal:10,borderRadius:25}}>Delivery</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{fontSize: 20}}>Pickup</Text></TouchableOpacity>
      </View>
    );
  }

  export default Tabs;