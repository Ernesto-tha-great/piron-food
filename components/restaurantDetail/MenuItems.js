import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch } from 'react-redux'

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


const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
         margin: 14
    },
    titleStyle: {
        fontSize: 19,
        fontWeight:"600"
    }
})
const MenuItems = ({restaurantName}) => {
    const dispatch = useDispatch();

const selectItem = (item, checkboxValue) => dispatch({
    type: "ADD_TO_CART", payload:{...item, restaurantName: restaurantName, checkboxValue: checkboxValue}
})

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          {foods.map((food, index) => (
             <View key={index}>
             <View style={styles.menuItemStyle}>
                 <BouncyCheckbox onPress={(checkboxValue) => selectItem(food, checkboxValue)} iconStyle={{borderColor: "light-gray",}} fillColor="red" />
                <FoodInfo food={food} />
                <FoodImage food={food}  />
             </View>
             <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}} />
             </View>
             
        ))}

        </ScrollView>
     
       
    )
}

export default MenuItems

const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent:"space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props)=> (
    <View>
        <Image source={{uri: props.food.image}} style={{width: 100, height: 100, borderRadius: 8}} />
    </View>
)
