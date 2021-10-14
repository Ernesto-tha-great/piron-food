import React, {useState, useEffect} from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import {Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import RestaurantItems, { localRestaurants } from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";


const YELP_API_KEY ="FTMP3ALq8q156mtBJ_R7ELi6Ur3D8mnE7Nn_65UXs-A2jUv_cpLAaT7_52_BsRji2gG_tB4JT3f1UUprW926tGaZXs-0vksARXH1u9xqN_7Ca_IrbuNobBgytctcYXYx"
const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState("Miami")
  const [activeTab, setActiveTab] = useState("Delivery")
  

const getRestaurantFromYelp = ( ) => {
  const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

  const apiOptions = {
    headers:{
      Authorization: `Bearer ${YELP_API_KEY}`
    }}
    return fetch(yelpUrl, apiOptions).then(res => res.json()).then(json => setRestaurantData(json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))))

}

useEffect(() => {
  getRestaurantFromYelp()
}, [city, activeTab])
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs  />
    </SafeAreaView>
  );
};

export default Home;
