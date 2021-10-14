import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

const ViewCart = () => {
    const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0)
    const totalUSD = total.toLocaleString('en', {
        style:'currency',
        currency: "USD",

    })

    console.log(totalUSD)
    return (
        <>

        {total ? (
       
        <View style={{flex: 1, alignItems:"center", justifyContent:"center", flexDirection:"row", position:"absolute", bottom:130, zIndex:999}}> 
        <View style={{flexDirection:"row", justifyContent:"center", width:"100%"}}>
            <TouchableOpacity style={{marginTop: 20, backgroundColor:"black", alignItems:"center", padding: 15, borderRadius: 30, width: 300, position:"relative", flexDirection:"row", justifyContent:"flex-end"}}>
            <Text style={{color:'white', fontSize: 20, marginRight: 30 }}>View cart</Text>
            <Text style={{color:"white", fontSize: 20}}>{totalUSD}</Text>
            </TouchableOpacity>
        </View>
        </View> 
       ): (<></>)}
        </>
    )
}

export default ViewCart
