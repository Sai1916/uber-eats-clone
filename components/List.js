import React from 'react'
import { View, Text, Image,ScrollView } from 'react-native'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType'

const listData = [
    {
        img: require("../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {
        img: require("../assets/images/soft-drink.png"),
        text: "Softdrinks"
    },
    {
        img: require("../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {
        img: require("../assets/images/fast-food.png"),
        text: "Fast Food"
    },
    {
        img: require("../assets/images/desserts.png"),
        text: "Desserts"
    },
    {
        img: require("../assets/images/coffee.png"),
        text: "Coffee"
    },
] 

const List = () => {
    return (
        <View
            style={{
                marginBottom:10,
                paddingVertical:10,
                backgroundColor:"white"
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height: 60}}>
                {listData.map((item) => ( 
                    <View key={item.text} style={{paddingHorizontal:10,alignItems:"center"}}>
                        <Image source={item.img} style={{
                            width: 50,
                            height: 40,
                            resizeMode:"contain",
                        }} />
                        <Text>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>

    )
}

export default List
