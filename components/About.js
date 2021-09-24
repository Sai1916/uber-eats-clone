import { useRoute } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image } from 'react-native'

function About() {

    const route=useRoute();

    const {name,image,price,reviews,rating,categories} = route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View style={{flexDirection:"column",backgroundColor:"white"}}>
            <Image source={{uri: image}} 
              style={{
                  width:"100%",
                  height: 180, 
                  resizeMode:"cover",
                  position: "relative"
              }}
            />  
            <Text style={{fontSize: 16,fontFamily:"sans-serif",paddingHorizontal:6,marginVertical:6}}>{description}</Text>
        </View>
    )
}

export default About
