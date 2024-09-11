// rnfes
import { Alert, Dimensions, FlatList, Image, Modal, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartReducer';
import colors from '../styles/colors';
// import { SliderBox } from 'react-native-image-slider-box';

const HomeScreen = () => {
    // resources list
    const list = [
        {
            id: "0",
            image: "https://m.media-amazon.com/images/I/41EcYoIZhIL._AC_SY400_.jpg",
            name: "Home",
        },
        {
            id: "1",
            image:
                "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/blockbuster.jpg",
            name: "Deals",
        },
        {
            id: "3",
            image:
                "https://images-eu.ssl-images-amazon.com/images/I/31dXEvtxidL._AC_SX368_.jpg",
            name: "Electronics",
        },
        {
            id: "4",
            image:
                "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/All_Icons_Template_1_icons_01.jpg",
            name: "Mobiles",
        },
        {
            id: "5",
            image:
                "https://m.media-amazon.com/images/G/31/img20/Events/Jup21dealsgrid/music.jpg",
            name: "Music",
        },
        {
            id: "6",
            image: "https://m.media-amazon.com/images/I/51dZ19miAbL._AC_SY350_.jpg",
            name: "Fashion",
        },
    ];
    const images = [
        "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
    ];
    const deals = [
        {
            id: "20",
            title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
            oldPrice: 25000,
            price: 19000,
            image:
                "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
                "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
            ],
            color: "Stellar Green",
            size: "6 GB RAM 128GB Storage",
        },
        {
            id: "30",
            title:
                "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
            oldPrice: 74000,
            price: 26000,
            image:
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
                "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
            ],
            color: "Cloud Navy",
            size: "8 GB RAM 128GB Storage",
        },
        {
            id: "40",
            title:
                "Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger",
            oldPrice: 16000,
            price: 14000,
            image:
                "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
                "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg",
            ],
            color: "Icy Silver",
            size: "6 GB RAM 64GB Storage",
        },
        {
            id: "40",
            title:
                "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
            oldPrice: 12999,
            price: 10999,
            image:
                "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg",
            ],
        },
    ];
    const offers = [
        {
            id: "0",
            title:
                "Oppo Enco Air3 Pro True Wireless in Ear Earbuds with Industry First Composite Bamboo Fiber, 49dB ANC, 30H Playtime, 47ms Ultra Low Latency,Fast Charge,BT 5.3 (Green)",
            offer: "72% off",
            oldPrice: 7500,
            price: 4500,
            image:
                "https://m.media-amazon.com/images/I/61a2y1FCAJL._AC_UL640_FMwebp_QL65_.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/61a2y1FCAJL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71DOcYgHWFL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71LhLZGHrlL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/61Rgefy4ndL._SX679_.jpg",
            ],
            color: "Green",
            size: "Normal",
        },
        {
            id: "1",
            title:
                "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
            offer: "40%",
            oldPrice: 7955,
            price: 3495,
            image: "https://m.media-amazon.com/images/I/41mQKmbkVWL._AC_SY400_.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/71h2K2OQSIL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71BlkyWYupL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71c1tSIZxhL._SX679_.jpg",
            ],
            color: "black",
            size: "Normal",
        },
        {
            id: "2",
            title: "Aishwariya System On Ear Wireless On Ear Bluetooth Headphones",
            offer: "40%",
            oldPrice: 7955,
            price: 3495,
            image: "https://m.media-amazon.com/images/I/41t7Wa+kxPL._AC_SY400_.jpg",
            carouselImages: ["https://m.media-amazon.com/images/I/41t7Wa+kxPL.jpg"],
            color: "black",
            size: "Normal",
        },
        {
            id: "3",
            title:
                "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
            offer: "40%",
            oldPrice: 24999,
            price: 19999,
            image: "https://m.media-amazon.com/images/I/71k3gOik46L._AC_SY400_.jpg",
            carouselImages: [
                "https://m.media-amazon.com/images/I/41bLD50sZSL._SX300_SY300_QL70_FMwebp_.jpg",
                "https://m.media-amazon.com/images/I/616pTr2KJEL._SX679_.jpg",
                "https://m.media-amazon.com/images/I/71wSGO0CwQL._SX679_.jpg",
            ],
            color: "Norway Blue",
            size: "8GB RAM, 128GB Storage",
        },
    ];

    const WIDTH = Dimensions.get('window').width;
    // renderItem fn for carousel images section
    const renderItem = ({ item, index }) => {
        // console.log("// renderItem fn for carousel images section");
        return (
            <View key={index}>
                <Image source={{ uri: item }} style={{ height: 200, width: WIDTH }} />
            </View>
        )
    };

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                setProducts(response.data);
            } catch (error) {
                console.log("error message", error)
            }
        }
        fetchData();
    }, []);
    //console.log("products", products)

    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState("jewelery");
    const [items, setItems] = useState([
        { label: "Men's clothing", value: "men's clothing" },
        { label: "jewelery", value: "jewelery" },
        { label: "electronics", value: "electronics" },
        { label: "women's clothing", value: "women's clothing" },
    ]);

    const navigation = useNavigation();

    // const onGenderOpen = useCallback(() => {
    //     setCompanyOpen(false);
    // })

    const cart = useSelector((state) => state.cart.cart);
    // console.log("cart contennts from HomeScreen.js: ", cart);

    const dispatch = useDispatch();
    // const [addedToCart, setAddedToCart] = useState(false);
    // const [addedItems, setAddedItems] = useState([]);
    const addItemToCart = (item) => {
        // console.log("added item: ", item)
        dispatch(addToCart(item));
        // setAddedToCart(true);
        // setAddedItems([...addedItems, item.id]);
        // setTimeout(() => {
        //     setAddedToCart(false);
        // }, 60000);
    };

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <SafeAreaView style={{
                paddingTop: Platform.OS === "android" ? 40 : 0,
                flex: 1,
                backgroundColor: "#FFF",
            }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                // nestedScrollEnabled={true}
                >
                    {/* Search bar */}
                    <View style={{ flexDirection: 'row', backgroundColor: '#00CED1', paddingVertical: 8, paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable style={{ flex: 1, flexDirection: 'row', backgroundColor: "#FFF", marginLeft: 10, padding: 5, gap: 5, borderRadius: 3 }}>
                            <AntDesign name="search1" size={24} color="black" />
                            <TextInput placeholder='Search Amazon.in' />
                        </Pressable>
                        <Ionicons name="mic" size={24} color="black" style={{ marginRight: 5 }} />
                    </View>
                    {/* delivery location selection */}
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{ backgroundColor: '#AFEEEE', flexDirection: 'row', gap: 5, padding: 5, alignItems: 'center' }}>
                        <Ionicons name="location-outline" size={24} color="black" />
                        <Text style={{ fontSize: 12 }}>Deliver To "NAME" - "ADDRESS" </Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </Pressable>
                    {/* Horizontal scroll view of the category list */}
                    <ScrollView horizontal={true}>
                        {list.map((item, index) => (
                            <View key={item.id}>
                                <Pressable padding={10} alignItems='center'>
                                    <Image source={{ uri: item.image }} style={{ width: 50, height: 50, resizeMode: "contain", borderRadius: 50 }} />
                                    <Text style={{ fontSize: 12, marginTop: 5 }}>{item.name}</Text>
                                </Pressable>
                            </View>
                        ))}
                    </ScrollView>

                    {/* Image carousel */}
                    <View>
                        <FlatList
                            data={images}
                            renderItem={renderItem}
                            // {() => { renderItem(data) }}
                            horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        {/* <SliderBox
                        images={images}
                        sliderBoxHeight={200}
                        onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                        dotColor="#FFEE58"
                        inactiveDotColor="#90A4AE"
                        autoplay
                        circleLoop
                    /> */}
                    </View>

                    {/* trending deals of the week */}
                    <Text style={{ fontSize: 16, fontWeight: 'bold', margin: 10 }}>Trending Deals of the week</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            deals.map((item, index) => (
                                <Pressable key={index}
                                    onPress={() =>
                                        navigation.navigate("Info", {
                                            id: item.id,
                                            title: item.title, price: item.price,
                                            carouselImages: item.carouselImages,
                                            color: item.color,
                                            size: item.size,
                                            oldPrice: item.oldPrice,
                                            item: item,
                                        })
                                    }
                                >

                                    < Image source={{ uri: item.image }}
                                        style={{ height: 180, width: 180, resizeMode: 'contain', margin: 5 }} />
                                </Pressable>
                            ))
                        }
                    </View>
                    <Text style={{ borderWidth: 1, height: 1, borderColor: '#DDD', marginTop: 10 }} />

                    {/* Today's deals */}
                    <Text style={{ fontSize: 16, fontWeight: 'bold', margin: 10 }}>Today's Deals</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            offers.map((item, index) => (
                                <Pressable key={item.id}
                                    onPress={() =>
                                        navigation.navigate("Info", {
                                            id: item.id,
                                            title: item.title, price: item.price,
                                            carouselImages: item.carouselImages,
                                            color: item.color,
                                            size: item.size,
                                            oldPrice: item.oldPrice,
                                            item: item,
                                        })

                                    }
                                    style={{ alignItems: 'center' }}>
                                    <Image source={{ uri: item.image }}
                                        style={{ height: 150, width: 150, resizeMode: 'contain' }} />
                                    <View style={{ backgroundColor: 'red', width: 100, borderRadius: 5, padding: 5, marginTop: 10 }}>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#FFF', textAlign: 'center' }}>Upto {item.offer}</Text>
                                    </View>

                                </Pressable>
                            ))
                        }
                    </ScrollView>
                    <Text style={{ borderWidth: 1, height: 1, borderColor: '#DDD', marginTop: 10 }} />

                    {/* Dropdown picker for products */}
                    <View
                        style={{
                            marginHorizontal: 10,
                            marginTop: 20,
                            width: "45%",
                            marginBottom: open ? 50 : 15,
                        }}
                    >
                        <DropDownPicker
                            style={{
                                borderColor: "#B7B7B7",
                                height: 30,
                                marginBottom: open ? 120 : 15,
                            }}
                            open={open}
                            value={category} //genderValue
                            items={items}
                            setOpen={setOpen}
                            setValue={setCategory}
                            setItems={setItems}
                            placeholder="choose category"
                            //placeholderStyle={styles.placeholderStyles}
                            //onOpen={onGenderOpen}
                            // onChangeValue={onChange}
                            zIndex={3000} // Ensures the dropdown appears above other elements when open
                            zIndexInverse={1000} // Ensures the dropdown appears below other elements when closed
                        />
                    </View>
                    {/* Products list */}
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        {
                            products?.filter((item) => item.category === category)
                                .map((item, index) => (
                                    <View key={item.id} //item.id
                                        style={{ marginTop: 20, marginHorizontal: 10 }}>
                                        <Image source={{ uri: item.image }}
                                            style={{ height: 150, width: 150, resizeMode: 'contain', margin: 5 }} />
                                        <Text numberOfLines={1} style={{ width: 150, marginTop: 5 }}>{item.title}</Text>
                                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={{ fontWeight: 'bold' }}>₹ {item.price}</Text>
                                            <Text style={{ color: "gold" }}>{item.rating.rate} ratings</Text>
                                        </View>
                                        {/* Add to Cart button */}
                                        <Pressable
                                            onPress={() => addItemToCart(item)}
                                            style={{ backgroundColor: colors.themeColor, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10, marginTop: 5, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}
                                        >

                                            {/* "{addedToCart ? (" "addedItems.includes(item.id) && addedToCart" ? (*/}
                                            {cart.some(cartItem => cartItem.id === item.id) ? ( // condition to check whether the item is in the cart or not
                                                <View>
                                                    <Text style={{ fontWeight: 'bold' }}>Added to Cart</Text>
                                                </View>
                                            ) : (
                                                <Text style={{ fontWeight: 'bold' }}>Add to Cart</Text>
                                            )}
                                        </Pressable>
                                    </View>
                                ))
                        }
                    </View>
                </ScrollView>


            </SafeAreaView >

            {/* Modal for Address section */}
            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.')
                        setModalVisible(!modalVisible)
                    }}
                >
                    {/* modalContainer */}
                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }}>
                        {/* modalView */}
                        <View style={{
                            height: '50%',
                            width: '100%',
                            backgroundColor: 'white',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                            paddingLeft: 10,
                        }}>
                            <Pressable
                                style={{ alignSelf: 'flex-end', padding: 5 }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <AntDesign name="closecircle" size={24} color="black" />
                            </Pressable>
                            <Text style={{ textAlign: 'left', fontSize: 16, fontWeight: 'bold' }}>Choose your location</Text>
                            <Text style={{ textAlign: 'left', fontSize: 14, marginTop: 5 }}>Select a delivery location to see product availability and delivery options</Text>
                            {/* Address list */}
                            <ScrollView horizontal>
                                {/* already added addresses */}
                                <Pressable
                                    onPress={() => {
                                        setModalVisible(false);
                                        navigation.navigate("YourAddresses");
                                    }}
                                    style={{ height: 150, width: 150, borderWidth: 1, borderColor: '#000', borderRadius: 5, marginTop: 20, marginRight: 10, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Suman Das</Text>
                                        <Ionicons name="location-outline" size={24} color="red" />
                                    </View>
                                    <Text numberOfLines={1}>#01, Near India Gate</Text>
                                    <Text>New Delhi</Text>
                                    <Text>India, Delhi</Text>
                                </Pressable>
                                {/* new address card */}
                                <Pressable
                                    onPress={() => {
                                        setModalVisible(false);
                                        navigation.navigate("YourAddresses");
                                    }}
                                    style={{ height: 150, width: 150, borderWidth: 1, borderColor: '#000', borderRadius: 5, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <Text style={{ color: 'blue', textAlign: 'center' }}>Add Address +</Text>
                                </Pressable>
                            </ScrollView>
                            <>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                    <Ionicons name="location-outline" size={24} color="blue" />
                                    <Text style={{ color: 'blue' }}>Enter an Indian pincode</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 10 }}>
                                    <MaterialIcons name="my-location" size={24} color="blue" />
                                    <Text style={{ color: 'blue' }}>Use my Current location</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 10, marginBottom: 35 }}>
                                    <Ionicons name="globe-outline" size={24} color="blue" />
                                    <Text style={{ color: 'blue' }}>Deliver outside India</Text>
                                </View>
                            </>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})