import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView} from 'react-native'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import MenuItems from '../components/restaurantDetail/MenuItems'
import firebase from '../firebase'
const OrderCompleted = () => {
    const [lastOrder, setLastOrder] = useState({
        items: [
            {
                title: "Italian Pasta",
                description: "With butter and tomato cantolile ",
                price:"$56.00",
                image: "https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
        ]
    })
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)
    const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0)
    const totalUSD = total.toLocaleString('en', {
        style:'currency',
        currency: "USD",

    })
    
    useEffect(() => {
        const db = firebase.firestore()
        const unsubscribe = db.collection("orders")
        .orderBy('createdAt', 'desc')
        .limit(1)
        .onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                setLastOrder(doc.data())
            })
        })

        return () => unsubscribe()
    }, [])
    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1}}>
            {/* download animation from lottie files */}
            <View style={{
                margin: 15,
                alignItems:"center",
                height: "100%",
            }}>
            <LottieView autoPlay speed={0.5} loop={false} 
            source={require('../assets/animations/check-mark.json')} 
            style={{height: 100, alignSelf:"center", marginBottom: 30}}  
              />
            <Text style={{fontSize: 20, fontWeight:"bold"}}>Your order at {restaurantName} has been placed for {totalUSD} </Text>
            <ScrollView showsVerticalScrollIndicator={false}> 
            <MenuItems foods={lastOrder.items} hideCheckbox={true} />
            
            <LottieView autoPlay speed={0.5}  
            source={require('../assets/animations/cooking.json')} 
            style={{height: 200, alignSelf:"center"}}  
              />
              </ScrollView>
              </View>
        </SafeAreaView>
    )
}

export default OrderCompleted
