import React from 'react'
import { View, Text, Image,ScrollView, TouchableOpacity } from 'react-native'

export default function FoodItems({categories}) {

    return (
        <ScrollView style={{margin:10,marginTop:2,position:"relative"}} showsVerticalScrollIndicator={false}>
            {categories.map((category,index) => (
                <TouchableOpacity key={index} style={{flexDirection:"row",width:"100%",padding:10,marginBottom:10,backgroundColor:"white",borderRadius:16}}>
                    <FoodInfo food={category}/>
                    <FoodImage food={category}/>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => {
    return (
        <View style={{flexDirection:"column",flex:1,flexShrink:1}}>
            <Text style={{fontSize:20,fontWeight:"bold",fontFamily:"sans-serif"}}>{props.food.title}</Text>
            <Text style={{fontSize:14,fontWeight:"bold",flexWrap:"wrap"}}>{props.food.description}</Text>
            <Text style={{fontWeight:"bold"}}>{props.food.price}</Text>
        </View>
    )
}

const FoodImage = (props) => {
    return (
    
            <Image 
                source={{uri: props.food.image}} 
                style={{
                    width: 70,
                    height: 90,
                    borderRadius:8
                }}
            />

    )
}