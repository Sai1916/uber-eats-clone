import React from "react";
import { View, Text } from "react-native";
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
// import GeoLocation from '@react-native-community/geolocation';
//import {API_KEY} from "@env";

 
export default function SearchRestaurant({ cityHandler }) {

   //const currentLoc = GeoLocation.getCurrentPosition(info => console.log(info));

  // const api_key = {API_KEY};

  return (
    <View style={{ marginVertical: 10, flexDirection: "row",margin: 5}}>  
       <GooglePlacesAutocomplete
        query={{ 
          key: process.env.API_KEY,   
          language: "en", 
         }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        GooglePlacesSearchQuery={{
          type: "restaurant",
        }}
        // currentLocation={true}
        // currentLocationLabel='Current location'
        debounce={400}
        placeholder="Search Restaurant"
        enablePoweredByContainer = {false}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee", 
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
           // marginRight: 10, 
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      /> 
    </View>
  );
}
