import React, { useEffect ,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Tabs from '../components/Tabs';
import List from '../components/List';
import RestaurantItem, { localRestaurants } from '../components/RestaurantItem';

const api_key = "aMV-we9j1C03bNZnbDvZ-NPXSQldlvhMDBYsQXb76spFD88FUDdJYtiN6rwH-facEaU1wAgOFAomTiFwZmxAY19tkgrqLQK3pVYObwo_F5nLYL2blfLBOwPt2p9MYXYx"
export default function HomeScreen({navigation}){  

    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("New York");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = { 
          headers: {
            Authorization: `Bearer ${api_key}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) =>
            setRestaurantData(
              json.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLowerCase())
              )
            )
          );
      };
    
      useEffect(() => {
        getRestaurantsFromYelp();
      }, [city]);

    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#c0ebe9"}}>
            <Tabs />  
            <List /> 
            <RestaurantItem navigation={navigation} restaurantData={restaurantData}/>
        </SafeAreaView>
    ); 
}
