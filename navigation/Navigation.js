import { useRoute ,Header} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image,View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetail from '../screens/RestaurantDetail';


const Stack = createStackNavigator();
 
function HomeStack() {

    const route = useRoute();

    const HeaderImage = (props) => {
        return (
            <View style={{ backgroundColor: '#eee' }}>
                <Image source={{uri : route.params?.image}} style={{width:"100%",height:200,resizeMode:"contain"}} />
            </View>
                
        )
    }

    return (
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen 
                    name="HomeScreen" 
                    component={HomeScreen}
                    options={{
                        headerShown:false, 
                    }}
                />
                <Stack.Screen 
                    name="RestaurantDetail" 
                    component={RestaurantDetail}
                    options={({ route }) => ({ title: route.params.name })}
                />
            </Stack.Navigator>
    )
}


export { HomeStack }