import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import OrderDetail from './OrderDetail'
import firebase from '../../firebase'
import LottieView from 'lottie-react-native'


const ViewCart = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false)



    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)
    const total = items.map((item) => Number(item.price.replace('$', ''))).reduce((prev, curr) => prev + curr, 0)
    const totalUSD = total.toLocaleString('en', {
        style:'currency',
        currency: "USD",

    })

    const addOrderToFirebase = () => {
        setLoading(true)
        const db =  firebase.firestore();
         db.collection("orders").add({
            items: items,
            restaurantName: restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            setTimeout(() => {
                setLoading(false)
                navigation.navigate('OrderCompleted')
            })
            
        })
        
        
    }

    const styles = StyleSheet.create({
        modalContainer: {
            flex:1,
            justifyContent:"flex-end",
            backgroundColor:'rgba(0,0,0,0.7)'
        },
        modalCheckoutContainer:{
            backgroundColor:"white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign:"center",
            fontWeight:"600",
            fontSize: 18,
            marginBottom: 10
        },
        subtotalContainer:{
            flexDirection:"row",
            justifyContent:'space-between',
            marginTop:15
        },
        subtotalText:{
            textAlign:"left",
            fontWeight:"600",
            fontSize: 15,
            marginBottom: 10
        }
    })

    const checkoutModalContent = () => {
        return (
          <>
            <View style={styles.modalContainer}>
                <View style={styles.modalCheckoutContainer}>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                    {items.map((item, index) => (
                        <OrderDetail key={index} item={item} />
                    ))}


                    <View style={styles.subtotalContainer}>
                        <Text style={styles.subtotalText}>Subtotal</Text>
                        <Text>{totalUSD}</Text>
                    </View>


                    <View style={{flexDirection:"row", justifyContent:"center"}}>

                       <TouchableOpacity onPress={() => {
                           setModalVisible(false)
                          
                           addOrderToFirebase()
                       }} style={{marginTop: 20, backgroundColor:"black", alignItems:"center", padding: 13, borderRadius: 30, width: 300, position:"relative"}}>
                        <Text style={{color:"white", fontSize: 20, fontWeight:"600"}}>Checkout</Text>
                        <Text style={{position:"absolute", color:"white", right: 20, fontSize:15, top: 17, fontWeight:"600"}}>{total? totalUSD : ""}</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
          </>
        )
    }
    return (
        <>
        <Modal animationType='slide' visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)} > 
            {checkoutModalContent()}
        </Modal>

        {total ? ( 
       
        <View style={{flex: 1, alignItems:"center", justifyContent:"center", flexDirection:"row", position:"absolute", bottom:130, zIndex:999}}> 
        <View style={{flexDirection:"row", justifyContent:"center", width:"100%"}}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={{marginTop: 20, backgroundColor:"black", alignItems:"center", padding: 15, borderRadius: 30, width: 300, position:"relative", flexDirection:"row", justifyContent:"flex-end"}}>
            <Text style={{color:'white', fontSize: 20, marginRight: 30 }}>View cart</Text>
            <Text style={{color:"white", fontSize: 20}}>{totalUSD}</Text>
            </TouchableOpacity>
        </View>
        </View> 
       ): (<></>)}


       {loading ? <View style={{backgroundColor: "black", position:"absolute",opacity:0.6, justifyContent:"center", alignItems:"center", width:"100%", height:"100%" }}>
            <LottieView autoPlay speed={3} source={require('../../assets/animations/scanner.json')} style={{height: 200}}  />
       </View> : <></>}
        </>
    )
}

export default ViewCart
