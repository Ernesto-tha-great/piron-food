import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const localRestaurants = [
  {
  name: "Beachside Bar",
  image_url:
    "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
  categories: ["Cafe", "Bar"],
  price: "$$",
  reviews: 1244,
  rating: 4.5,
},
{
  name: "Benihana",
  image_url:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  categories: ["Cafe", "Bar"],
  price: "$$",
  reviews: 1244,
  rating: 3.7,
},
{
  name: "India's Grill",
  image_url:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  categories: ["Indian", "Bar"],
  price: "$$",
  reviews: 700,
  rating: 4.9,
},
]

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://media.istockphoto.com/photos/cozy-restaurant-for-gathering-with-friends-picture-id1159992039?b=1&k=20&m=1159992039&s=170667a&w=0&h=prGK7E_h62IuZFQNtnCDPhqmG6y1-MV-l_NiJhuAl7Q=",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Farmhouse kitchen Thai Cuisine
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 . min </Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
      }}
    >
      <Text>4.5</Text>
    </View>
  </View>
);
const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: 30 }}>
      {localRestaurants.map((restaurant, index) => (
           <View key={index} style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
           <RestaurantImage />
           <RestaurantInfo />
         </View>
      ))}
     
    </TouchableOpacity>
  );
};

export default RestaurantItem;
