import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems'
import ViewCart from '../components/restaurantDetail/ViewCart'

const foods = [
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price:"$13.50",
        image: "https://cdn.pixabay.com/photo/2018/04/23/17/40/lasagna-3344994_960_720.jpg"
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing  Indian dish with with tenderloin chicken off the sizzling pot",
        price:"$19.20",
        image: "https://cdn.pixabay.com/photo/2021/07/02/05/09/chicken-pakoda-6380887__340.jpg"
    },
    {
        title: "Chilaquiles",
        description: "Chilaqueles with cheese and sauce. A delicious mexican dish.",
        price:"$14.50",
        image: "https://cdn.pixabay.com/photo/2020/08/24/03/35/chilaquiles-5512587_960_720.jpg"
    },
    {
        title: "Chicken ceasar salad",
        description: "With butter lettuce, tomato and sauce bechamel",
        price:"$13.50",
        image: "https://cdn.pixabay.com/photo/2016/04/17/12/10/grilled-chicken-1334632__340.jpg"
    },
    {
        title: "Lasagna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price:"$13.50",
        image: "https://cdn.pixabay.com/photo/2018/04/23/17/40/lasagna-3344994_960_720.jpg"
    }
]




const RestaurantDetail = ({route, navigation}) => { 
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical: 20}} />
            <MenuItems restaurantName={route.params.name}  foods={foods}  />
            <ViewCart navigation={navigation} />
        </View>
    )
}

export default RestaurantDetail
