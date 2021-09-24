import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'


export const localRestaurants = [
    {
            title: "Mourya Restaurant",
            image_url: require('../assets/images/bg1.jpg'),
            rating: "4",
            time:"30-45 min",
        },
        {
            title: "Alfa Restaurant",
            image_url: require('../assets/images/bg2.jpg'),
            rating: "4.3",
            time:"40-45 min",
        },
        {
            title: "Aditya Famiy Restaurant",
            image_url: require('../assets/images/bg2.jpg'),
            rating: "3.8",
            time:"30-40 min",
        },
        {
            title: "Alankar Restaurant",
            image_url: require('../assets/images/bg3.jpg'),
            rating: "4.2",
            time:"40-50 min",
        },
    ]
    
export default function RestaurantItem({navigation, ...props}){
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {props.restaurantData.map((restaurant,index) => (
                <TouchableOpacity 
                    key={index}
                    style={{
                        width:"94%",
                        flexDirection:"column",
                        alignItems:"center",
                        justifyContent:"center",
                        marginVertical:10,
                        marginHorizontal:10, 
                        backgroundColor:"white",
                        borderRadius:10
                    }}
                        onPress={() => navigation.navigate("RestaurantDetail",
                            {
                                name: restaurant.name,
                                image: restaurant.image_url,
                                price: restaurant.price,
                                reviews: restaurant.review_count,
                                rating: restaurant.rating,
                                categories: restaurant.categories,
                            }
                        )}
                    >
                    <Image 
                        source={{uri: restaurant.image_url}}
                        style={{
                            width: "100%",
                            height: 160,
                            borderTopRightRadius:10,
                            borderTopLeftRadius:10,
                        }} 
                    />  
                    <View style={{paddingHorizontal:20,paddingVertical:10,width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{fontSize:20,fontFamily:"sans-serif"}}>{restaurant.name}</Text>
                            <Text style={{color:"#3a999e"}}>{restaurant.price}</Text>
                        </View> 
                        <View style={{width:28,height:28,backgroundColor:"lightgray",alignItems:"center",justifyContent:"center",borderRadius:20}}>
                            <Text>{restaurant.rating}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

